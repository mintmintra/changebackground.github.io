let bgHead = document.getElementById('bgHead');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');


btn1.addEventListener('click', function() {
    bgHead.style.backgroundColor = "#9ACD32";
});

btn2.addEventListener('click', function() {
    bgHead.style.backgroundColor = "#FFFF00";
});

btn3.addEventListener('click', function() {
    bgHead.style.backgroundColor = "#F5DEB3";
});

btn4.addEventListener('click', function() {
    bgHead.style.backgroundColor = "#EE82EE";
});

btn5.addEventListener('click', function() {
    bgHead.style.backgroundColor = "#FF6347";
});

bgHead.addEventListener('click', function() {
    bgHead.style.backgroundColor = "#FFF";
});