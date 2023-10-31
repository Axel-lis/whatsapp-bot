const cron = require('node-cron');
const { enviarMensaje } = require('./mensaje.js');

const CONTACTO = '549numerotelefonico@c.us';

const MSG_SALUDOS = [
    'Buenos días!, ¿Cómo se encuentra hoy?',
    'Su turno agendado para el día 18/12/2023 se encuentra vigente'
]

function programadorTareas(cliente) {
    const tiempo = '0 13 * * * *';
    if (cron.validate(tiempo)) {
        console.log('Cron inicializado');
        cron.schedule(tiempo, async () => {
            try {
                const saludo = MSG_SALUDOS[Math.floor(Math.random() * MSG_SALUDOS.length)];
                await enviarMensaje(cliente, CONTACTO, saludo);
                console.log('Mensaje enviado');
            } catch (error) {
                console.log('Error en cron', error);
            }
        });
    }
}

module.exports = {
    programadorTareas,
};