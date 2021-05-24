var generateDTO = require('./useCasesLayout/generateDTO')
var generateController = require('./useCasesLayout/generateController')
var generateCase = require('./useCasesLayout/generateCase')
var generateSpec = require('./useCasesLayout/generateSpec')
var generateIndex = require('./useCasesLayout/generateIndex')
var generateEntitie = require('./EntitiesLayout/generateEntitie')
var generateIEntitie = require('./EntitiesLayout/generateIEntitie')
var generateEither = require('./sharedLayout/generateEither')
var generateError = require('./ErrorLayout/ErrorLayout')
var generateDomainError = require('./ErrorLayout/DomainErrorLayout')
var generateEntitieChild = require('./EntitiesLayout/generateEntitieChild')
var { formatType } = require('./utils')
module.exports = {
    useCasesFiles: (name) => {
        let upname = name.charAt(0).toLocaleUpperCase() + name.slice(1)
        return [
            {
                name: upname + 'DTO.ts',
                data: generateDTO(upname)
            },
            {
                name: upname + 'Controller.ts',
                data: generateController(upname)
            },
            {
                name: upname + 'Case.ts',
                data: generateCase(upname)
            },
            {
                name: upname + '.spec.ts',
                data: generateSpec()
            },
            {
                name: 'index.ts',
                data: generateIndex(upname)
            },
        ]

    },
    entitiesFiles: (name, fieldsArray) => {
        let upname = name.charAt(0).toLocaleUpperCase() + name.slice(1)

        return [
            ...fieldsArray && fieldsArray.map((item) => {
                let { type, name } = formatType(item)
                let upname = name.charAt(0).toLocaleUpperCase() + name.slice(1)
                return {
                    name: upname + '.ts',
                    data: generateEntitieChild(upname, type)
                }
            }),
            {
                name: upname + '.ts',
                data: generateEntitie(upname, fieldsArray)
            },
            {
                name: 'I' + name + '.ts',
                data: generateIEntitie(upname, fieldsArray)
            }
        ]
    },
    sharedFiles: () => [
        {
            name: 'either.ts',
            data: generateEither()
        },
    ],
    errorFiles: (fieldsArray) => {

        let array = fieldsArray && fieldsArray.map((item) => {
            let { type, name }  = formatType(item)
            let upname = name.charAt(0).toLocaleUpperCase() + name.slice(1)
            return {
                name: 'Invalid' + upname + 'Error.ts',
                data: generateError(upname)
            }
        })

        return array
    },
    domainErrorFiles: () => [{
        name: 'DomainError.ts',
        data: generateDomainError()
    }]
}