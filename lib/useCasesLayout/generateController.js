module.exports = (name) => 
    `import { I${name}Controller } from "./${name}DTO";
import { ${name}UseCase } from "./${name}Case";

/** 
* The class to exists methods
*/
export class ${name}Controller implements I${name}Controller {
    constructor(
        private ${name.charAt(0).toLocaleLowerCase() + name.slice(1)}UseCase: ${name}UseCase
    ) {}
    
    handle(): void {
        this.${name.charAt(0).toLocaleLowerCase() + name.slice(1)}UseCase.execute()
    }
}`