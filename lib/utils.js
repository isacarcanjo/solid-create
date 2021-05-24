var fs = require('fs');
var { FgGreen, Reset, FgRed } = require('./colors')

function exist(dir) {
    return fs.existsSync(dir)
}

function createFolder(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}

function createFile(dir, files) {
    let c = 0
    let exists = false
    files && files.map(file => {
        if (!exist(dir + file.name)) {
            c++;
            fs.appendFile(dir + file.name, file.data, function (err) {
                if (err) throw err;
                console.log(FgGreen, '  Created! ' + file.name)
            });
        } else {
            exists = true
        }
    })
    if (c <= files.length && c > 0) {
        console.log(Reset, 'Files created with success!')
    } else if (c == 0 && exists) {
        console.log(Reset, "files already exist!")
    } else {
        console.log(FgRed, "Files were not created!")
    }
}

function formatType(itens) {
    let array = itens.split(':')
    let name = array[0]
    let type = array.length > 1 ? array[1] : 'any'
    return {
        type: type,
        name:name
    }
}

module.exports = {
    exist,
    createFolder,
    createFile,
    formatType
}