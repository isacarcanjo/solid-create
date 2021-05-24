module.exports = (name) => 
    `import { ${name}UseCase } from "./${name}Case";
import { ${name}Controller } from "./${name}Controller";
    
export const make${name}Controller = (): ${name}Controller => {
    const getUseCase = new ${name}UseCase()
    const controller = new ${name}Controller(
        getUseCase
    )
    return controller
}`
