// requireds
const fs = require('fs');
const colors = require('colors');

let creararchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-hasta-el-${limite}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)

        });

    });
}

let listarTabla = (base, limite) => {
    console.log('========================='.red);
    console.log(`==Tabla de l ${base} ==== \n`.red);
    console.log('========================='.red);

    for (let i = 0; i <= limite; i++) {
        console.log(`${base}*${i} = ${base*i} \n`);

    }
}

//Guardamos los elementos globales que utilizaremos 
module.exports = {
    creararchivo,
    listarTabla
}