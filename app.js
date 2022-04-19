
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

//console.log(argv);
//console.log('base yargs', argv.base);
//buscando argumentos por posicion
// const [ , , arg3 = 'base=5'] = process.argv
// const [, base = 5] = arg3.split('=');


// console.log(process.argv);

crearArchivo( argv.b, argv.l, argv.h )
    .then(nombre => console.log(nombre.rainbow))
    .catch(err => console.log(err))