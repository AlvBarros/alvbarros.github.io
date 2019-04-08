(function() { 
    var deg = 0;
    var rotation = function() {
        var x = document.getElementById('hello');
        deg += 360;
        x.style.webkitTransform = 'rotate('+deg+'deg)'; 
        x.style.mozTransform = 'rotate('+deg+'deg)'; 
        x.style.msTransform = 'rotate('+deg+'deg)'; 
        x.style.oTransform = 'rotate('+deg+'deg)'; 
        x.style.transform = 'rotate('+deg+'deg)'; 
        setTimeout(rotation, 3000);
    }
    rotation();
})();