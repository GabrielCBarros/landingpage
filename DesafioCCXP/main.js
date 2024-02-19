const ingressos = [];


function addredborder(id){
    var element = document.querySelector('#' + id);
    element.style.border = '5px solid red';
}
function highlightcard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle('card-highlight');

}
function selectcard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle('card-selected');
    if (ingressos.includes(selector)) {
        let index = ingressos.indexOf(selector);
        ingressos.splice(index, 1);
      } else {
        ingressos.push(selector);
      }
    }
function showselectedcard(){
    if(ingressos.length > 0) alert('ingressos selecionados:' + ingressos);

}