

let header=document.querySelector('.header');

let button=document.querySelector('.button');


function overwriteclass(element,className) {

    element.classList.add(className);

}

button.addEventListener('click',function () {


    overwriteclass(header,'zmiana');

});