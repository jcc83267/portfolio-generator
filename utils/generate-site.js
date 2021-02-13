const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if there's an error, reject the promise and send the error to the Promises '.catch()' method
            if (err) {
                reject(err);
                //return out of the function here to make sure the promise doesn;t accidentally execute the resoolve() function as well
                return;
            }

            //if everthing went well, resolve the Promise and send the successful data to the '.then()' method 
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            
            //if everything when well
            resolve({
                ok:true,
                message: 'File Copied'
            });
        });
    });
}

module.exports = { writeFile, copyFile };