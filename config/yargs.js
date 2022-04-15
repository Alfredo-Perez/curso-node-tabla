
const argv = require('yargs')
                .options({
                    'b': {
                        alias: 'base',
                        demandOption: true,
                        // default: 5,
                        describe: 'Es la base de la tabla de multiplicar',
                        type: 'number'
                    },
                    'l': {
                        alias: 'listar',
                        describe: 'Muestra la tabla en consola',
                        default: false,
                        type: 'boolean'
                    },
                    'h': {
                        alias: 'hasta',
                        describe: 'Este es el numero hasta donde quieres la tabla',
                        default: 10,
                        type: 'number'
                    }
                })
                .check( (argv, options) => {
                    if ( isNaN(argv.b) ){
                        throw new Error("La base tiene que ser un numero.")
                    } else {
                        return true
                    }
                })
                .argv;

module.exports = argv;