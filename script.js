
container.style.backgroundColor = "yellow";
container.style.width = "100px";

hours.style.color = "red";
minutes.style.color = "blue";
seconds.style.color =  "black";

let myInterval = setInterval(currentTime, 100);
clearInterval(myInterval);
currentTime();
hours.innerText = "hh";
minutes.innerText = "mm";
seconds.innerText = "ss";

function currentTime() {
    let today = new Date();

    let t = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    hours.innerHTML = t;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

let canStart = true;

function currentTimeDisplay() {
    if (canStart == true) {
        myInterval = setInterval(currentTime, 1000); 
    }
    canStart = false;   
}

function stopCurrentTime() {
    clearInterval(myInterval);
    canStart = true;
}

let button1 = document.createElement('button');
button1.innerText = 'Click me!';
document.body.append(button1);

let button2 = document.createElement('button');
button2.innerText = 'Stop!';
document.body.append(button2);

button1.addEventListener('click', currentTimeDisplay);
button2.addEventListener('click', stopCurrentTime);




