export const validCommands = ['clear', 'help', 'commands', 'about',
    'hello', 'git', 'home',
    'kill', 'cd projects', 'cd gallery',
    'cd teams', 'cd achievements',
    'social insta', 'social youtube', 'social discord', 'social linkedin',
    '',
    'surprise me',
    '0'
];

export const imageToo = ['hello', 'kill', 'cd projects', 'cd gallery', 'cd teams', 'cd achievements'];

export let consoleData = {
    '0': [],
    'about': [{
        'text': "> Models and Robotics Section, a.k.a MaRS, is a group open for all Robotics enthusiasts", 'color': '#A1E3B6'
    },
        {'text': "at the Indian Institute Of Technology, Roorkee. We provide a perfect platform ", 'color': "#A1E3B6"},
        {'text': "for students to develop innovative and technical skills such as mechanical, electronics,", 'color': "#A1E3B6"},
        {'text': "autonomous navigation, and architecture to create things that simplify life.", 'color': "#A1E3B6"}
    ],
    'help': [{
        'text': '> Type “commands” into the terminal and hit enter to', 'color': '#A1E3B6'
    }, {
        'text': 'see all the possible commands', 'color': '#A1E3B6'
    }],
    'clear': [],
    'hello': [{
        'text': "Welcome to Mars! :)", 'color': '#FFFF00'
    }],
    'git': [{
        'text': "Opening GitHub in 0...", 'color': '#20D6A5', 'class': 'github-port'
    }],
    'kill': [{'text': 'goodbye cruel world! 💀', 'color': 'red'}],
    'cd gallery': [{'text': 'Redirecting to gallery...', 'color': '#FFFF00'}],
    'cd projects': [{'text': 'Redirecting to projects...', 'color': '#FFFF00'}],
    'cd teams': [{'text': 'Redirecting to teams...', 'color': '#FFFF00'}],
    'cd achievements': [{'text': 'Redirecting to achievements...', 'color': '#FFFF00'}],
    'social youtube': [{'text': 'Opening in new tab...', 'color': '#FFFF00'}],
    'social insta': [{'text': 'Opening in new tab...', 'color': '#FFFF00'}],
    'social linkedin': [{'text': 'Opening in new tab...', 'color': '#FFFF00'}],
    'social discord': [{'text': 'Opening in new tab...', 'color': '#FFFF00'}],
    'commands': [
        {'text': 'Available Commands: ', 'color': '#F45AED'},

        {'text': 'commands', 'color': '#1142CC'},
        {'text': 'home', 'color': '#1142CC'},
        {'text': 'about', 'color': '#1142CC'},
        {'text': 'hello', 'color': '#1142CC'},
        {'text': 'git', 'color': '#1142CC'},
        {'text': 'cd {projects, gallery, teams, achievements}', 'color': '#1142CC'},
        {'text': 'social {insta, discord, linkedin, youtube}', 'color': '#1142CC'},
        {'text': 'kill', 'color': '#1142CC'},
        {'text': 'clear', 'color': '#1142CC'},
        // {'text': 'surprise me', 'color': '#1142CC'},
    ],
    'surprise me': [
        {'text': "Let's learn robots!", 'color': ""}
    ]
}