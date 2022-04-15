const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');




console.clear();

// console.log(process.argv);
// console.log(argv)
// console.log('base: yargs', argv.base)


// const [ , , arg3 = 'base=5'] = process.argv; //en ves de usar yargs
// const [ , base =5] = arg3.split('=');


// console.log(base)

// const base = 4;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

