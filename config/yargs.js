// YARGS Nos permite crear comandos para recibir valores por consola

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crear una tabla de multiplicar en un archivo de texto en funcion a la base y a limite', opts)
    .help()
    .argv;


module.exports = {
    argv
}