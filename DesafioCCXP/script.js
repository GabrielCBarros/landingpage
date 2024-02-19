const dia = window.document.getElementById('dia')
const hora = window.document.getElementById('hora')
const minuto = window.document.getElementById('minuto')
const segundo = window.document.getElementById('segundo')

const lancamento = '11 oct 2024'

function countDwon(){
    const datalanc = new Date(lancamento)
    const hoje = new Date()

    const segtotal = (datalanc - hoje)/1000;

    const finaldias = Math.floor(segtotal/ 60 / 60 / 24)
    const finalhoras = Math.floor(segtotal/ 60 / 60)% 24
    const finalminutos = Math.floor(segtotal/ 60)% 60
    const finalsegundos = Math.floor(segtotal)% 60

    dia.innerHTML = finaldias + 'D'
    hora.innerHTML = formatoTempo (finalhoras) + 'H'
    minuto.innerHTML = formatoTempo (finalminutos) + 'M'
    segundo.innerHTML = formatoTempo (finalsegundos) + 'S'

}
function formatoTempo(tempo){
    return tempo < 10? `0 ${tempo}` : tempo
}
countDwon();
setInterval(countDwon, 1000)