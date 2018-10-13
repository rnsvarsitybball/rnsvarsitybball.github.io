var game = [
    {
        type:"footage",
        game_date:"OCT 12, 2018",
        game_num: 3,
        game_team:"Halifax Prep",
        game_location:"Halifax, NS",
        game_pic:"images/GAME3.png",
        game_link:"https://drive.google.com/drive/folders/1jtT-FCcgWJEPiJe-O_xRQhbbIP2TZqG1?usp=sharing"
    },
    {
        type:"footage",
        game_num: 2,
        game_date:"SEP 28, 2018",
        game_team:"Lee Academy",
        game_location:"Lee Academy, MA",
        game_pic:"images/GAME2.png",
        game_link:"https://drive.google.com/drive/folders/1OU6CzHoxoOv_E1eyYx35TCZUaEQeu8pa?usp=sharing"
    },
    {
        type:"footage",
        game_num: 1,
        game_date:"SEP 20, 2018",
        game_team:"Prince Edward Island",
        game_location:"Rothesay Netherwood School, NB",
        game_pic:"images/GAME1.png",
        game_link:"https://drive.google.com/drive/folders/1aEbDvJ6khVaJuQRAov8ATB1j5rHlYhnQ?usp=sharing"
    }
];
var date = [
    {
        type:"schedule",
        game_date:"OCTOBER 25-28, 2018",
        game_team:"NPA SESSION #1",
        game_location:"Rothesay Netherwood School, NB, CA"
    }
]

var menu = [
    {
        type:"menu",title:"HOME",link:"/"
    },
    {
        type:"menu",title:"ABOUT",link:"about.html"
    },
    {
        type:"menu", title:"GAME FOTTAGE", link:"fottage_page.html"
    },
    {
        type:"menu", title:"OUR TEAM", link:"roster.html"
    }
]





var options = {
    caseSensitive: true,
    matchAllTokens: true,
    threshold: 0.0,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
        "type", 
    ]
};
var fuse = new Fuse(game, options); // "list" is the item array
var fuse1 = new Fuse(date, options);
var fuse2 = new Fuse(menu, options);