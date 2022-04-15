const fs = require('fs');
const colors = require('colors');

colors.setTheme({
    help: ['cyan', 'bold'],
    info: ['green', 'bold'],
    warn: ['yellow','bold']
});

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    // 5 x 1 = 5
    // 5 x 2 = 10
    // ...
    // 5 x 10 = 50
    try {
        
        let salida = '';
        let consola = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.warn} ${i} ${'='.warn} ${base * i}\n`;
        };
        
        if (listar) { 
            console.log('==================='.green.bold);
            console.log(colors.help('  Tabla del:'), colors.warn(base));
            console.log('==================='.green.bold);
        
            console.log(consola);
        };

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        // console.log(`tabla-${base}.txt creado`);
        return colors.info(`tabla-${base}.txt`);
    } catch (error) {
        return error;
    }


    // fs.writeFile( `tabla-${base}.txt`, salida, (err)=>{
    //     if (err) throw err;
    //     console.log(`tabla-${base}.txt creado`);
    // });
}; 

module.exports = {
    crearArchivo
};