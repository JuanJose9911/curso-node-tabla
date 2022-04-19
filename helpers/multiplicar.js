const fs = require('fs');
const colors = require('colors')

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        

        let i = 1;
        let salida = "";
        let consola = "";
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`;
        }

        if (listar){
            console.clear();
            console.log('==================='.green);
            console.log('tabla del:'.red, colors.blue(base));
            console.log('==================='.green);

            console.log(consola);
        }

        // fs.writeFile('tabla-5.txt', salida, (err) =>{
        //     if (err) throw err;

        //     console.log('Archivo creado');
        // })

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}`;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    crearArchivo
}
