/*
plastic.onmousedown = function(event){
    plastic.style.position = 'absolute';
    plastic.style.zIndex = 1000;
    document.body.append(plastic);
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY){
        plastic.style.left = pageX - plastic.offsetWidth / 2 + 'px';
        plastic.style.top = pageY - plastic.offsetHeight / 2 + 'px';
    };
    function onMouseMove(event){
        moveAt(event.pageX, event.pageY);
    };
    document.addEventListener('mousemove', onMouseMove);

    plastic.onmouseup = function(){
        document.removeEventListener('mousemove', onMouseMove);
        plastic.onmouseup = null;
    };
};

plastic1.onmousedown = function(event){
    plastic1.style.position = 'absolute';
    plastic1.style.zIndex = 1000;
    document.body.append(plastic1);
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY){
        plastic1.style.left = pageX - plastic1.offsetWidth / 2 + 'px';
        plastic1.style.top = pageY - plastic1.offsetHeight / 2 + 'px';
    };
    function onMouseMove(event){
        moveAt(event.pageX, event.pageY);
    };
    document.addEventListener('mousemove', onMouseMove);

    plastic1.onmouseup = function(){
        document.removeEventListener('mousemove', onMouseMove);
        plastic1.onmouseup = null;
    };
};
match = () => {
    let pCan = document.getElementsByClassName('pCan');
    let plastic = document.getElementsByClassName('plastic');
    if (plastic === pCan){
        plastic.style.backgroundImage = 'none';
    } else {

    }
}
match()

function allowDrop(ev) {
    ev.preventDefault();
  }

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }


  let plastic = document.getElementById("plastic").getBoundingClientRect();
  let plastic1 = document.getElementById("plastic1").getBoundingClientRect();
  let plastic2 = document.getElementById("plastic2").getBoundingClientRect();
  let plastic3 = document.getElementById("plastic3").getBoundingClientRect();
  let plastic4 = document.getElementById("plastic4").getBoundingClientRect();
  let plastic5 = document.getElementById("plastic5").getBoundingClientRect();
  let pCan = document.getElementById("pCan").getBoundingClientRect();
 if (plastic.right < pCan.left || plastic.left > pCan.right || plastic.bottom < pCan.top || plastic.top > pCan.bottom ){
    plastic.style.display = "none";
 }*/
 function allowDrop(ev) {
    ev.preventDefault();
  }

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
  }

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();

    // The can where the waste is dropped
    let can = ev.target;
    // the waste that is dragged
    let waste = document.getElementById(ev.dataTransfer.getData("text"));

    can.appendChild(waste);
    
    if (overlap(waste, can) && waste.getAttribute('type') === can.getAttribute('type')) {
        waste.style.display = 'none';
    }
}

function overlap(el, el2) {
    const rect1 = el.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();
    
    return !(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom)
}