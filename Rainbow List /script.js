document.addEventListener('DOMContentLoaded', function () {
    var rainbowList = document.querySelectorAll('li');

    rainbowList.forEach(function (item) {
        item.addEventListener('click', function () {
            this.style.backgroundColor = randomColor();
        });
    });


});

function randomColor() {
    var red = Math.floor(Math.random() * 256);  
    var green = Math.floor(Math.random() * 256);  
    var blue = Math.floor(Math.random() * 256); 
    var color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    return color;
}
