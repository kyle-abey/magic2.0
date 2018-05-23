//code skeleton from https://stackoverflow.com/users/567595/stuart
function generateDrop(posLeft, posTop, d) {
    var drop = document.createElement('div');
    drop.className = 'rain';
    drop.style.left = posLeft + 'px';
    drop.style.top = posTop + 'px';
    drop.id = 'd';
    document.getElementById('content').appendChild(drop);
}

function newDrop() {
    var x = Math.floor(Math.random() * 2000) + 50,
        y = Math.floor(Math.random() * -200) -100
    generateDrop(x, y, num);
    num--;
    if (num > 0) {
        setTimeout(newDrop, 150);
        //this will always be constant if num=infinity
    }
}

function rainBrandon() {
    num = Infinity;
    newDrop();
    interval = setInterval(function () {
        var drops = document.getElementsByClassName('rain'),
            newYpos;
        if (drops.length == 0) {
            clearInterval(interval);
            return;
        }
        for (var i = 0; i < drops.length; i++) {
            newYpos = drops[i].offsetTop + 5;
            if (newYpos > drops[i].parentNode.offsetHeight) {
                drops[i].parentNode.removeChild(drops[i]);
            } else {
                drops[i].style.top = newYpos + 'px';
            }
        }
    }, 30); //leaving 30ms as the frame rate
}

var thing = document.getElementById("thing");
var container = document.getElementById("container");
var mousecoords = document.getElementById("mousecoords");

container.addEventListener("mousemove", printMouseCoords);

function printMouseCoords(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    mousecoords.textContent = mouseX + ", " + mouseY;
}

container.addEventListener("mousemove", moveThing);

function moveThing(event) {
    var xPosition = event.clientX - container.getBoundingClientRect().left - (thing.clientWidth / 2);
	var yPosition = event.clientY - container.getBoundingClientRect().top - (thing.clientHeight / 2);
	// in case of a wide border, the boarder-width needs to be considered in the formula above
	thing.style.left = xPosition + "px";
	thing.style.top = yPosition + "px";
}

window.addEventListener("keypress", changeThingColor);

function changeThingColor(event) {
    if (event.key === "b"){
        thing.style.background = "blue";
    } else if (event.key === "o") {
        thing.style.background = "orange";
    } else {
        thing.style.background = "green";
    }
}
