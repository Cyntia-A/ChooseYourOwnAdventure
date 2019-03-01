// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You've grown tired of this town, what should you do?",
            choices: [
                {
                    text: "Stay in Town",
                    nextLevel: "stay",
                },

                {
                    text: "Leave Town",
                    nextLevel: "leave",
                },
            ]
        },

        stay: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across a fire monster or something!",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        leave: {
            message: "You decided to leave your small town! You become unsure if you want to contine...",
            choices: [
                {
                    text: "Enter the Woods",
                    nextLevel: "start",
                    
                },
                {
                    text: "Go Back to Town",
                    nextLevel: "stay"
                    
                },
            ]
        },

    }
};
