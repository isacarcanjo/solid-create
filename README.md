# solid-create

This is a tool to build SOLID projects

# Installation

Either through cloning with git or by using [npm](https://www.npmjs.com/package/@isacarcanjo/solid-create) (the recommended way):

```bash
npm install -g @isacarcanjo/solid-create --force
```

# Usage

For CLI options, use the `-h` (or `--help`) argument:
<br/>
<br/>


solid-create wraps your application, so you can pass all the arguments you would normally pass to your app:

```bash
solid -u [name of useCase]
solid -e [name of entitie] [field1] [field2] ...
```

Examples:

```bash
solid -u CreateUser
solid -e User name email password
```

You can too make entity with attributes types, using [Typescript basic types](https://www.typescriptlang.org/docs/handbook/basic-types.html) adding `:` after the attribute

```bash
solid -e User id:number name:string email:string password:string isAdmin:boolean 
```

![example](https://raw.githubusercontent.com/isacarcanjo/solid-create/main/solid-best-example.gif)
<br/>



Author: https://github.com/isacarcanjo

[Contact me](https://www.linkedin.com/in/isac-arcanjo-098a0b164/)
