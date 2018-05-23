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
