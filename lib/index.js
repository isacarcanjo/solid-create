var path = require('path')
var dir = path.join(process.cwd(), 'src/')
var { useCasesFiles, entitiesFiles, sharedFiles, errorFiles, domainErrorFiles } = require('./files')

var help = require('./help')
var { createFile, createFolder, exist } = require('./utils')
function createUsecase(name) {
    //usecases
    createFolder(dir)
    createFolder(dir + 'useCases/')
    createFolder(dir + 'useCases/' + name)
    createFile(dir + 'useCases/' + name + '/', useCasesFiles(name))
}

function createEntities(name, fieldsArray) {
    //entities
    createFolder(dir)
    createFolder(dir + 'entities/')
    createFolder(dir + 'entities/' + name)
    createFile(dir + 'entities/' + name + '/', entitiesFiles(name, fieldsArray))

    // shared
    createFolder(dir + 'shared/')
    createFile(dir + 'shared/', sharedFiles())

    //creating errors
    createErrors(name, fieldsArray)
}


function createErrors(name, fieldsArray) {
    
    createFolder(dir)
    createFolder(dir + 'entities/')

    //errors
    createFolder(dir + 'entities/' + name + '/errors')
    createFile(dir + 'entities/' + name + '/errors/', errorFiles(fieldsArray))

    //domain error
    createFolder(dir + 'entities/' + 'error')
    createFile(dir + 'entities/' + 'error/', domainErrorFiles())
}


exports.createUsecase = createUsecase
exports.help = help
exports.createEntities = createEntities