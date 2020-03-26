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