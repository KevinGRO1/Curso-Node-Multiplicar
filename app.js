// YARGS Nos permite crear comandos para recibir valores por consola

//El ultimo .argv extra solo el metodo argv y lo asigna a la variable creada
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { creararchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        creararchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}
//let base = 'asdf';

//let argv2 = process.argv;

//console.log('Limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1];