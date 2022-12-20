var technologies = ['python', 'postgresql', 'django + drf', 'fastapi', 'flask', 'aiogram', 'redis', 'celery', 'html / css / js'];

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function includeText() {
    var text = "<b>Stack:</b>";

    const div = document.createElement('div');
    div.className = 'row'

    div.innerHTML += '<b>Stack </b>'

    for (const tech in technologies) {
        div.innerHTML += `<span style="background-color: ${getRandomColor()};" class="label" id="label${tech}" onclick="changeColor()">${technologies[tech]}</span>`;
    }

    var element = document.getElementById("stack");
    element.appendChild(div);
}

function changeColor() {
    for (const i in technologies) {
        document.getElementById(`label${i}`).style.backgroundColor = getRandomColor();
    }
}


includeText()



