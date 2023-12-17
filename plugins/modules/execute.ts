import {exec} from 'child_process';
import os from 'os';
import path from 'path';
const execute = (cmd) => {
    const isWindows = os.type() == "Windows_NT" ? true : false;

    const outputPath = path.join(__dirname, '..', 'build', 'scrcpy'); // Define the path to the downloaded scrcpy

    return new Promise((resolve, reject) => {
        exec(
          (isWindows ? `cd ${outputPath} && ` : '') + cmd, // Change to the scrcpy download path on Windows
          (error, stdout, stderr) => {
            if (error || stderr) reject(error || stderr);
            resolve(stdout);
          }
        );
    });
}

export default execute;
