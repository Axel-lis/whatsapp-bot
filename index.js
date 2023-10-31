const { startAPI } = require('./src/api');
const { programadorTareas} = require('./src/programador');

(async () =>{
      try{
        const cliente = await startAPI();
        programadorTareas(cliente)
      }catch(error){
        console.log('Error en index', error);
      }
})();