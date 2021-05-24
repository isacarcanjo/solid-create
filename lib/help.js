
module.exports = () => {
    console.log(`
Usage: solid [option] [name]

  Options
    -u [Name]          ................... for to make useCases
    -e [Name] [fields] ................... for to make entities
    More option coming soon...

  Examples:

  $ solid -u CreateUser
  $ solid -e User name email password
    `)
}