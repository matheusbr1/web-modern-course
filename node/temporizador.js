/* Shedule -> Pacote do node para realizar agendamento de tarefas */
const schedule = require('node-schedule') // Importando Schedule

// Executar de 5 em 5s as 12h na terça feira(2)
const tarefa1 = schedule.scheduleJob('*/5 * 7 * * 1', function() {
    console.log('Running task 1', new Date().getSeconds(), 'seconds')
})

/* Temporizador padrão do Js */
setTimeout(function () {
    tarefa1.cancel()
    console.log('Canceling Task 1')
}, 20000) /* Executar o cancelamento depois de 20 segundos */

/* 
Outros temporizadores
setImmediate -> SetTimeoute com o valor zerado
setInterval -> Disparar uma função de tempos em tempos
 */

 /* Regras para Tarefa 2 */
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] /* Executar de segunda a sexta */
regra.hour = 7 // Executando as 7 horas
regra.second = 30 // No segundo X

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Running task 2', new Date().getSeconds(), 'seconds')
})