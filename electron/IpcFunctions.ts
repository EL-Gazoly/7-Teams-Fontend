import excuteCommand from '../plugins/execute';
import Jimp from "jimp";
import Store from 'electron-store';
import ADB from './adb';
import {exec} from 'child_process';
const store = new Store();
const adb = new ADB();

class IpcFunctions{
     async handleListDevices(event) {
        try {
          const devices = await adb.client.listDevices();
          event.sender.send('list-devices-reply', devices);
        } catch (err) {
          console.error('Something went wrong:', err.stack);
        event.reply('error-reply', err);
        }
      } 
      
      async  handleConnect(event, arg) {
        try {
          console.log('Connecting to:', arg);
          store.delete('ip');
          await excuteCommand('adb disconnect');
          await adb.connectToDevice(arg, 5555)
          .catch(async(err) =>{
            await excuteCommand(`adb tcpip 5555`)
            .then(async()=>{
              await adb.connectToDevice(arg, 5555)
            })
            .catch(err=>{
              console.log('Make sure you are on the same WIFI, if the problem persist Try connecting with USB')
              event.sender.send('connect-reply', 'Make sure you are on the same WIFI, if the problem persist Try connecting with USB');
            })
          })
          
          store.set('ip', arg);
          event.sender.send('connect-reply', 'Connected');
        } catch (err) {
            console.log('Try connecting the USB first')
            console.error('Something went wrong:', err.stack);
            event.sender.send('connect-reply', 'Try connecting the USB first')
        }
      }
      
      async  handleScreenshot(event) {
        try {
          const currentIP = store.get('ip')
          await excuteCommand(`adb -s ${currentIP}:5555 shell screencap  -p /sdcard/screencap.png  && adb -s ${currentIP}:5555 exec-out screencap -p > ../../assets/screen.png `);
          await processScreenshot();
          event.sender.send('screenshot-reply');
        } catch (err) {
            console.error('Something went wrong:', err.stack);
        event.reply('error-reply', err);
        }
      }
  
      async  handleStartStream(event) {
        try {
          const currentIP = store.get('ip')
          console.log(currentIP)
          console.log('Starting Stream')
            excuteCommand(`scrcpy -s ${currentIP} --video-bit-rate 8M --max-size 2048 --crop 1600:900:2017:510 -t --window-title B-Vision-Stream  --no-audio`);
          event.sender.send('start-stream-reply', 'Stream Started');
        } catch (err) {
            console.error('Something went wrong:', err.stack);
        event.reply('error-reply', err);
        }
      }
      
      async  handleScreenRecord(event) {
        try {
          const currentIP = store.get('ip')
            excuteCommand(`scrcpy -s ${currentIP} --max-size 2048 --crop 1600:900:2017:510  --no-audio -N --window-title B-Vision-Recoard  --record=../../assets/recoard.mp4`);
          event.sender.send('screenrecord-reply', 'Screen Record Started');
        } catch (err) {
            console.error('Something went wrong:', err.stack);
        event.reply('error-reply', err);
        }
      }
    
      async  handleStopScreenRecord(event) {
          try {
              const currentIP = store.get('ip')
              await connectToDeviceAndExecuteCommands(event)
              .then(async()=>{
              await isScrcpyRunning()
              .then(async(isRunning)=>{
                if(isRunning){
                  setTimeout(async()=>{
                  await excuteCommand(`scrcpy -s ${currentIP}  --video-bit-rate 8M --max-size 2048 --crop 1600:900:2017:510 -t --window-title B-Vision-Stream  --no-audio`);
                  }, 15000)
                }
              })
            })
              event.sender.send('stop-screenrecord-reply', 'Screen Record Stopped');
          } catch (err) {
              console.error('Something went wrong:', err.stack);
              event.reply('error-reply', err);
          }
        
        
      }
    
      async  handleStopStreamAndScreenRecord(event) {
          try {
            const currentIP = store.get('ip')
              await connectToDeviceAndExecuteCommands(event);
              await excuteCommand(`scrcpy -s ${currentIP}  --video-bit-rate 8M --max-size 2048 --crop 1600:900:2017:510 -t --window-title B-Vision-Stream  --no-audio`);
              event.sender.send('stop-screenrecord-reply', 'Screen Record Stopped');
          } catch (err) {
              console.error('Something went wrong:', err.stack);
              event.reply('error-reply', err);
          }
      }
    
      async  KillServer(event) {
        try {
            await excuteCommand('adb kill-server');
        } catch (err) {
            console.error('Something went wrong while killing server:', err.stack);
            event.reply('error-reply', err);
        }
      }
    
    
}

async function processScreenshot() {
  return new Promise((resolve, reject) => {
    Jimp.read('./assets/screen.png', (err, image) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      
      image.crop(2017, 510, 1600, 900).resize(2048, Jimp.AUTO).write('./assets/screen.png');
      resolve(null);
    });
  });
}

async function connectToDeviceAndExecuteCommands(event) {
  try {
      await excuteCommand('adb disconnect');
      const currentIP  = store.get('ip') as string;
      console.log('this is my current ip', currentIP)
      await adb.connectToDevice(currentIP, 5555);
  } catch (err) {
      console.error('Something went wrong while connecting:', err.stack);
      event.reply('error-reply', err);
  }
 
}
async function isScrcpyRunning(){
  return new Promise((resolve, reject) => {
    const cmd = 'tasklist /FI "IMAGENAME eq scrcpy.exe" /FO CSV';
    
    exec(cmd, (error, stdout) => {
      if (error) {
        reject(error);
        return;
      }

      // Check if the output contains scrcpy.exe
      const isRunning = stdout.toLowerCase().includes('scrcpy.exe');
      resolve(isRunning);
    });
  });
}
export default IpcFunctions;