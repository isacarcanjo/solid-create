# solid-create

create SOLID projects using this snippet

[NPM](https://www.npmjs.com/package/@isacarcanjo/solid-create)

# Installation

Either through cloning with git or by using [npm](http://npmjs.org) (the recommended way):

```bash
npm install -g @isacarcanjo/solid-create --force
```

# Usage

solid-create wraps your application, so you can pass all the arguments you would normally pass to your app:

```bash
solid -u [name of useCase]
solid -e [name of entitie] [field1] [field2] ...
```

Example:

```bash
solid -u CreateUser
solid -e User name email password
```

![example](https://raw.githubusercontent.com/isacarcanjo/solid-create/main/solid-best-example.gif)
For CLI options, use the `-h` (or `--help`) argument:

Author: https://github.com/isacarcanjo
