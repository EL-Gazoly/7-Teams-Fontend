
import excute from "./modules/execute";
const excuteCommand = (cmd) => {
    return new Promise((resolve, reject) => {

        excute(cmd)
        .then(res => resolve(res))
        .catch(err => reject(err));


    });
}

export default excuteCommand
