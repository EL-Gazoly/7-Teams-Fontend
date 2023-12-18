const adbkit = require('adbkit');
import Bluebird from 'bluebird';
const path = require('path');

/**
 * ADB class for managing Android Debug Bridge (ADB) operations.
 * @class ADB
 */
class ADB {
    /**
     * Adbkit client instance for general ADB operations.
     * @type {any}
     * @public
     */
    client: any;
  
  
    /**
     * Create a new instance of the ADB class.
     * Initializes the Adbkit clients for general and specific ADB operations.
     * @constructor
     */
    constructor() {
      this.client = adbkit.createClient(
        {
          bin: path.join(__dirname, '../build/platform-tools/adb.exe'),
          port: 5037,
        }
      );
    }
  
    /**
     * Start tracking Android devices and receive events when devices are added, removed, or the tracking ends.
     * @async
     * @method trackDevices
     * @returns {Promise<void>} Resolves when tracking is started successfully.
     * @throws {Error} If something goes wrong during tracking.
     */
    async trackDevices(): Promise<void> {
      try {
        const tracker = await this.client.trackDevices();
        tracker.on('add', (device: any) => console.log('Device %s was plugged in', device.id));
        tracker.on('remove', (device: any) => console.log('Device %s was unplugged', device.id));
        tracker.on('end', () => console.log('Tracking stopped'));
      } catch (err: any) {
        throw new Error('Something went wrong while tracking devices: ' + err.stack);
      }
    }
  
    /**
     * Connect to an Android device via TCP/IP with the specified IP address and port.
     * @async
     * @method connectToDevice
     * @param {string} ipAddress - The IP address of the target Android device.
     * @param {number} port - The port number for the ADB connection.
     * @returns {Promise<void>} Resolves when the connection is successful.
     * @throws {Error} If the connection encounters an error.
     */
    async connectToDevice(ipAddress: string, port: number): Promise<void> {
      try {
        const id = await this.client.connect(ipAddress, port);
        console.log('Connected to device with id', id);
      } catch (err: any) {
        throw new Error('Failed to connect to the device: ' + err);
      }
    }
  
    /**
     * Install the APK file namedon all connected Android devices.
     * @async
     * @method installAPK
     * @returns {Promise<void>} Resolves when the APK is installed on all devices.
     * @throws {Error} If the installation encounters an error on any device.
     */
    async installAPK(apkPath: any): Promise<void> {
      try {
        console.log('Installing surveyapp.apk on all connected devices');
        const devices = await this.client.listDevices(); // Use await to get the devices list.
        await Bluebird.map(devices, async (device: any) => {
          try {
            await this.client.install(device.id, apkPath);
            console.log(`Installed ${apkPath} on device:`, device.id);
          } catch (installError: any) {
            console.error('Error installing on device', device.id, ':', installError.stack);
          }
        });
        console.log(`Installed ${apkPath} on all connected devices`);
      } catch (err: any) {
        throw new Error('Something went wrong during APK installation: ' + err.stack);
      }
    }

    async takeScreenshot(): Promise<void> {
      try {
        const devices = await this.client.listDevices();
        await Bluebird.map(devices, async (device: any) => {
          try {
            const screenshot = await this.client.screencap(device.id , '/sdcard/screenshot.png');
            console.log(`Screenshot taken on device:`, device.id);
          } catch (screenshotError: any) {
            console.error('Error taking screenshot on device', device.id, ':', screenshotError.stack);
          }
        });
        console.log(`Screenshot taken on all connected devices`);
      } catch (err: any) {
        throw new Error('Something went wrong during screenshot: ' + err.stack);
      }
    }

    async pullFile(): Promise<void> {
      try {
        const devices = await this.client.listDevices();
        await Bluebird.map(devices, async (device: any) => {
          try {
            const screenshot = await this.client.pull(device.id, '/sdcard/screenshot.png');
            console.log(`Screenshot taken on device:`, device.id);
          } catch (screenshotError: any) {
            console.error('Error taking screenshot on device', device.id, ':', screenshotError.stack);
          }
        });
        console.log(`Screenshot taken on all connected devices`);
      } catch (err: any) {
        throw new Error('Something went wrong during screenshot: ' + err.stack);
      }
    }

    async screenrecord(): Promise<void> {
      try {
        const devices = await this.client.listDevices();
        await Bluebird.map(devices, async (device: any) => {
          try {
            const screenrecord = await this.client.shell(device.id, 'scrcpy');
            console.log(`Screen recording started on device:`, device.id);
            // Wait for 10 seconds
            await new Promise(resolve => setTimeout(resolve, 10000));
            // Stop the screen recording
            await this.client.shell(device.id, 'pkill screenrecord');
            console.log(`Screen recording stopped on device:`, device.id);
    
            // Pull the screen recording file from the device
            const remoteFilePath = '/sdcard/demo.mp4';
            const localFilePath = path.join(__dirname, `demo_${device.id}.mp4`); // Save with unique names
            await this.client.pull(device.id, remoteFilePath, localFilePath);
            console.log(`Screen recording pulled from device:`, device.id);
          } catch (screenrecordError: any) {
            console.error('Error taking screen recording on device', device.id, ':', screenrecordError.stack);
          }
        });
        console.log(`Screen recording and pulling completed on all connected devices`);
      } catch (err: any) {
        throw new Error('Something went wrong during screen recording and pulling: ' + err.stack);
      }
    }
    
  }

  
  export default ADB;
  
