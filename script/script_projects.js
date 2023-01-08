var projects = ['Шахматы', 'Социальная сеть', 'API Гомельского транспорта', 'Язык программирования', 'Анонимный чат бот']
var images = [
    'chess.png',
    'socialnetwork.png',
    'api.png',
    'eq.jfif',
    'anonym.png'
]

var projects = {
    0: {
        name: 'Шахматы',
        description: 'Шахматный движок написанный на Python с пользовательским интерфейсом на PyGame и мультиплеером на socket Из возможностей интерфейса: подсветка возможных ходов количество ходов таймер с временем выбывшие фигуры переворот доски Также в движке присутствуют шахматные боты 3 уровней',
        image: 'chess.png',
        github: 'https://github.com/dop3file/chess'
    },
    1: {
        name: 'Социальная сеть',
        description: 'mood - социальная сеть на Django\nИз реализованного функционала :\nпрофиль\nизменения профиля\nинтересы\nпосты\nуведомления\nлента\nсохранненые посты\nлайки\nподписки и т.д',
        image: 'socialnetwork.png',
        github: 'https://github.com/dop3file/mood_social_network'
    },
    2: {
        name: 'API Гомельского транспорта',
        description: 'JSON API для получения информации о гомельском общественном транспорте',
        image: 'api.png',
        github: 'https://github.com/dop3file/gomeltrans_api'
    },
    3: {
        name: 'Интерпретатор',
        description: 'Equilibrium - это скриптовый строго типизированный язык программирования, написанный на Python',
        image: 'eq.jfif',
        github: 'https://github.com/dop3file/equilibrium'
    },
    4: {
        name: 'Анонимный чат бот',
        description: 'Анонимный телеграм чат бот Chatium для анонимного общения',
        image: 'anonym.png',
        github: 'https://github.com/dop3file/anonym_chat'
    }
}
function includeProjectText() {
    all_projects_span = document.querySelectorAll('span.project_tab');
    var parent = document.getElementById('nav__');

    for(var i = 0; i < Object.keys(projects).length; i++) {
        var span_tag = document.createElement('span');
        span_tag.innerHTML = projects[i]['name'];
        span_tag.className = 'project_tab';
        span_tag.id = `project${i}`;
        span_tag.setAttribute("onclick","getProject(this.id);");
        parent.appendChild(span_tag);
    }

}

function getProject(id) {
    id = parseInt(id.slice(-1))
    console.log()
    description = document.getElementById('description');
    description.innerHTML = projects[id]['description'];
    image = document.getElementById('project_image')
    image.src = 'images/projects/' + projects[id]['image'];
    label = document.getElementById('project_label')
    label.innerHTML = projects[id]['name'];

    link = document.getElementById('git_link')
    link.href = projects[id]['github']

  }


includeProjectText()