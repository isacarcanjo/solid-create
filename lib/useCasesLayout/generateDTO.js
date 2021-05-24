
module.exports = (name) =>
    `export interface I${name}UseCase {
    execute(): void
}
    
export interface I${name}Controller  {
    handle(): void
}
    `