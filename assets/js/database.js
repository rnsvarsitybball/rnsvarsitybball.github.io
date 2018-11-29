var game = [
    {
        type:"footage",
        game_date:"NOV 28, 2018",
        game_num: 13,
        game_team:"LONDON BASKETBALL ACADEMY",
        game_location:"Notre Dame High School, ON",
        game_pic:"images/GAME5.png",
        game_link:"https://youtu.be/Z30-fFhW1HQ"
    },
    {
        type:"footage",
        game_date:"NOV 25, 2018",
        game_num: 12,
        game_team:"Bernice MacNaughton High School",
        game_location:"Rothesay Netherwood School, NB",
        game_pic:"images/GAME6.png",
        game_link:"https://youtu.be/beUIGJgv_r4"
    },
    {
        type:"footage",
        game_date:"NOV 24, 2018",
        game_num: 11,
        game_team:"Charles P. Allen High School",
        game_location:"Rothesay Netherwood School, NB",
        game_pic:"images/GAME6.png",
        game_link:"https://youtu.be/CHDNe9PPBW8"
    },
    {
        type:"footage",
        game_date:"NOV 24, 2018",
        game_num: 10,
        game_team:"Kennebecasis Valley High School",
        game_location:"Rothesay Netherwood School, NB",
        game_pic:"images/GAME6.png",
        game_link:"https://youtu.be/aL0NGIT0J8o"
    },
    {
        type:"footage",
        game_date:"NOV 23, 2018",
        game_num: 9,
        game_team:"Fredericton High School",
        game_location:"Rothesay Netherwood School, NB",
        game_pic:"images/GAME6.png",
        game_link:"https://youtu.be/XvY_F6yEGy0"
    },
    {
        type:"footage",
        game_date:"OCT 28, 2018",
        game_num: 8,
        game_team:"Toronto Basketball Academy",
        game_location:"Rothesay Netherwood School, NB",
        game_pic:"images/GAME5.png",
        game_link:"https://youtu.be/GVdhY7rac7Y"
    },
    {
        type:"footage",
        game_date:"OCT 27, 2018",
        game_num: 7,
        game_team:"GTA Prep",
        game_location:"Rothesay Netherwood School, NB",
        game_pic:"images/GAME5.png",
        game_link:"https://youtu.be/WaluBDbq3mE"
    },
    {
        type:"footage",
        game_date:"OCT 26, 2018",
        game_num: 6,
        game_team:"Crestwood",
        game_location:"Rothesay Netherwood School, NB",
        game_pic:"images/GAME5.png",
        game_link:"https://youtu.be/zIyELDnHuE0"
    },
    {
        type:"footage",
        game_date:"OCT 25, 2018",
        game_num: 5,
        game_team:"B.E.A.S.T. Prep",
        game_location:"Rothesay Netherwood School, NB",
        game_pic:"images/GAME5.png",
        game_link:"https://youtu.be/WCkwH_WrhuA"
    },
    {
        type:"footage",
        game_date:"OCT 16, 2018",
        game_num: 4,
        game_team:"Friendly",
        game_location:"Rothesay Netherwood School, NB",
        game_pic:"images/GAME4.png",
        game_link:"https://drive.google.com/drive/folders/1H2h10Y72C9UIOv7EBYAJ5nQeQbVieAqd?usp=sharing"
    },
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
        game_date:"NOV.30, 2018 - 9:00AM EST",
        game_team:"EDGE SCHOOL",
        game_location:"NOTRE DAME HIGH SCHOOL, ON"
    },
    {
        type:"schedule",
        game_date:"DEC1, 2018 - 9:00AM EST",
        game_team:"OAKVILLE BASKETBALL PREP",
        game_location:"NOTRE DAME HIGH SCHOOL, ON"
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
        type:"menu", title:"GAME FOOTAGE", link:"fottage_page.html"
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