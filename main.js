const prompt = require("prompt-sync")()
let PlayerOne = {
    namePlayer: "Sangoku",
    pv: 100,
    attack: [
        {
            nameAtk: "1: coup de tête, balayette, manchette",
            power: -10,
            accuracy: 1
        },
        {
            nameAtk: "2: senzu",
            power: 15,
            accuracy: 2
        },
        {
            nameAtk: "3: Kamehameha",
            power: -20,
            accuracy: 2
        },
        {
            nameAtk: "4: Super KAMEHAMEHA",
            power: -30,
            accuracy: 3
        }
    ]
}
let PlayerTwo = {
    namePlayer: "Vegeta",
    pv: 100,
    attack: [
        {
            nameAtk: "1 :Ne touche pas à ma Bulma",
            power: -10,
            accuracy: 1
        },
        {
            nameAtk: "2: senzu",
            power: 15,
            accuracy: 2
        },
        {
            nameAtk: "3: Big Bang Attack",
            power: -20,
            accuracy: 2
        },
        {
            nameAtk: "4: Final FLASH pour Paul",
            power: -30,
            accuracy: 3
        }
    ]
}
function randomize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function choicePlayer() {
    for (let i = 0; i < PlayerOne.attack.length; i++) {
        console.log(PlayerOne.attack[i].nameAtk);
    }
    let choice = parseFloat(prompt("choississez une attaque"))
    while (choice != "1" && choice != "2" && choice != "3" && choice != "4") {

        choice = prompt("Attaque éronnée , merci de ne répondre que par 1, 2 , 3 ou 4")
    }
    return PlayerOne.attack[choice - 1]
}
function attaquePOne(attack, target, attaquant) {
    choicePlayer
    if (randomize(0, attack.accuracy) == attack.accuracy) {
        if (attack.power > 0) {
            attaquant.pv += attack.power
            console.log("Senzu réussi, " + attaquant.namePlayer + " PV sont à présent de " + attaquant.pv);

        } else {
            target.pv += attack.power
            console.log(target.namePlayer + " a été touché par " + attack.nameAtk + " ses pv restants sont " + target.pv);
        }
    } else {
        console.log(attaquant.namePlayer + " a essayé " + attack.nameAtk + " ; " + attaquant.namePlayer + " s'est emmelé les pinceaux, attaque ratée !");
    }
    console.log("A l'issue de ce tour, les pv restants de :  " + target.namePlayer + " sont de : " + target.pv);

}
function ascii(namePlayer, pv) {
    if ((PlayerOne.pv > 0)){
        console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠔⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠋⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⡎⠀⠀⠀⡇⠀⠀⠀⠀⡶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣧⡇⠀⠀⠀⣻⠀⠀⠀⢸⢇⠸⣷⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⢀⣠⠤⠄⠲⠶⢶⣶⣶⣤⢄⡀⣿⡏⣷⠀⠀⠀⢸⣇⠀⠀⣸⢼⠀⢿⣇⠀⣀⢤⣶⠊⠉⠉⠀⣤⠔⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⢴⣚⠉⠀⠀⠀⢤⡒⠒⠛⠛⠉⠻⠿⢿⣿⣿⡆⠀⠀⠘⣿⡄⢀⣿⣾⠀⢸⣿⣾⡷⠋⠀⠀⢀⣠⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠙⠺⢦⣄⣀⠉⠲⣄⠀⠀⠀⠀⠀⠈⢿⣿⣦⡀⠀⠈⠉⠛⠻⣇⣴⣿⡿⠋⠀⠀⠀⢠⣾⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⢠⣀⠀⠀⠀⠀⠙⢿⣷⣄⠈⠷⣤⡀⠀⠀⠀⠀⠙⢿⣷⡄⠀⠀⠀⠀⠈⠹⠋⠀⠀⠀⠀⣰⣿⠃⠀⢀⣠⣴⡾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠘⣧⠉⠓⢢⣤⣄⣀⣙⣿⣧⡄⠹⣿⣆⠀⠀⠀⠀⠈⢿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣧⣴⡾⠕⠋⡜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠻⣷⠀⠀⠀⠉⠙⠿⠿⠿⣿⣷⣿⡍⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⠟⠋⠁⠀⢀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠙⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⠀⢂⡄⠀⠀⠀⠀⡀⠀⠀⠘⣧⡀⠀⣶⡄⠀⠀⠀⠀⢀⣴⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠈⢿⣄⣀⣀⠀⠀⢀⣄⢠⣤⠆⢠⡿⠁⠀⢀⣶⣷⣿⡄⠀⠀⣿⣿⠀⣿⣇⠀⢀⣠⣴⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠀⠀⠈⠛⠿⣿⣷⠟⢡⣿⠟⠀⣾⠁⠀⣴⡿⠋⢈⢸⣧⠀⢠⡿⣿⢀⣿⣿⡶⠟⠛⢛⡻⠟⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠃⠀⣿⡟⠀⠀⡇⠀⣠⠟⠁⣠⠊⠀⣿⣠⣾⢧⣿⠿⢯⡛⣧⣶⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡟⣠⣾⠿⣷⣠⣤⣷⣰⣟⣂⡘⢀⣤⣾⣯⣧⠁⠀⠁⢠⡾⡱⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡿⠁⠀⠙⢿⣿⠹⣿⣿⠿⠟⠛⠭⠟⠛⠉⠁⠀⠀⡒⠋⠁⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠀⠀⠀⠀⠀⠉⠀⠘⣆⠀⡇⣀⠀⠀⠀⠀⠀⠀⡼⠁⠀⠀⠀⠱⢄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠦⣍⠉⠭⠅⠀⢀⡤⠚⠁⠀⠀⠀⠀⡄⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠖⠉⢹⢹⢢⠤⠔⡽⢠⠖⠀⠀⠀⠀⢠⡇⠀⠀⠀⠀⠨⠦⣴⡒⠢⢤⣀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⢀⡴⠒⢛⣾⠈⢇⣎⡤⠧⠤⠀⠠⠤⠤⣀⣧⠴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢄⠀⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠴⠒⢫⠝⠋⠉⠉⠉⠉⠒⠚⠚⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⠀⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠀⠀⠀⣠⠊⠀⢀⠆⠀⠀⠀⠀⠀⠀⢀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠐⠦⡀⠀⠀⠀⣀⠀⠀⡇⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠀⠀⡼⠁⠀⢀⠎⠀⠀⠀⠀⠀⠀⠀⡮⠤⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢇⠀⠀⠀⠀⠀⠘⢦⠀⠀⠈⠆⠀⡇⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠀⢰⠁⠀⠀⡘⠀⠀⠀⠀⠀⠀⠀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠀⠀⠈⡆⠀⠀⠸⢠⠇⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⠀⣾⠀⠀⠀⣧⣶⡄⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⢞⣉⡷⠀⠀⠀⠀⢀⡤⠒⠺⢦⣀⠀⠀⠀⠀⢉⠀⢀⣶⠋⡇⠀⠀⠀");
        console.log(" ⠀⠀⠀⠀⠀⣽⠀⢀⡴⢫⡀⠀⠀⠀⠀⢀⣀⠵⠤⢄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠖⠁⠀⠀⠀⠈⡇⠀⠉⠉⠁⠉⢀⠚⠁⠀⢹⠀⠀⠀");
        console.log("⠀⠀⠀⠀⠀⢰⠋⡇⠉⠀⠀⡹⠢⠤⠖⠊⠁⠠⠁⠀⠀⠀⠀⠉⠉⠒⠒⠒⠒⠒⠋⠁⠀⠀⠀⠀⠀⠀⠀⢳⠀⠀⠀⠀⠀⠈⢣⠀⠀⣿⡄⠀⠀");
        console.log("⠀⠀⠀⠀⠀⡇⢰⠀⠀⠀⠀⡇⢀⠤⣰⠚⠉⠉⡏⠉⠉⠉⠉⠒⠦⡀⠀⠀⠀⠐⠲⠤⠀⠀⠀⠀⠀⠀⠀⠸⠀⠀⠀⠀⠀⠀⠘⡆⠀⠉⣇⠀⠀");
        console.log("⠀⠀⠀⠀⠀⣇⡇⠀⠀⠀⠀⠹⡔⣊⠃⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⠈⢦⡀⠀⠀⠈⠉⠢⡀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠃⠀⠀⢹⠀⠀");
        console.log("⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⡇⠁⢧⠀⠀⠀⢧⠀⠀⠀⠀⠀⠀⡠⠊⠉⠒⠂⠀⠀⠀⠈⢢⠀⠀⠀⠀⣠⢳⡀⠀⠀⠀⠀⠀⢸⠀⠀⢸⠀⠀");
        console.log("⠀⠀⠀⠀⢰⣿⠀⠀⠀⠀⠀⠀⡇⠀⠀⡟⠀⠀⢈⠏⠀⠀⠀⠉⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢄⡤⠊⠁⠀⠳⡀⠀⠀⠀⠀⡘⠀⠀⢠⠀⠀");
        console.log("⠀⠀⠀⠀⢸⠹⡀⠀⠀⠀⠀⠰⠻⡄⠀⡇⠀⠀⢸⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡜⠀⠀⠀⠀⠀⠑⢄⠀⠀⣰⠃⠀⢀⣾⡀⠀");
        console.log("⠀⠀⠀⠀⠸⠀⢣⠀⣀⠤⣖⡥⣼⡽⡄⠙⣄⣀⠀⢣⡀⠀⠀⢀⣠⢇⣀⡀⠀⠀⠀⠀⠀⠀⣠⠋⠐⠦⣄⠀⠀⠀⠀⠀⣗⣆⠇⠀⠀⠈⢉⡇⠀");
        console.log("⠀⠀⠀⠀⡼⠀⠸⠯⣾⠏⢀⣨⠥⣒⠵⠒⠃⢉⡩⠝⠿⠛⠉⠉⠈⠁⠀⠈⠺⡉⠙⢮⠁⠛⠭⠉⠲⢄⠸⡿⢦⠀⠀⢀⠃⠘⠀⠀⣄⠀⠀⢇⠀");
        console.log("⠀⠀⠀⡜⠁⡴⠀⡜⢀⣨⢥⡤⠤⠓⣞⡤⡆⠁⠀⢀⡴⣄⣀⠀⠀⠀⠀⣴⣄⠈⢦⠀⠱⣄⠀⢠⣄⣀⣤⣻⣄⠀⠀⡎⠀⠀⠀⠀⠸⡄⠀⢸⠀");
        console.log("⠀⠀⡼⠀⢀⡇⠸⣻⡋⠠⠊⢠⡖⣾⣷⣤⠘⣶⣾⣿⣆⣙⠀⣱⡄⡐⠀⠛⠀⠑⠦⣹⡁⠚⢄⢀⢇⣮⣷⢬⣽⣦⢘⠁⠀⠀⠀⠀⠀⡇⠀⢸⠄");
        console.log("⠀⢠⡇⠀⢸⠃⠀⢹⠁⣀⡴⠋⢀⠟⠛⠻⢾⠭⣽⠯⣭⠽⠷⠿⣷⠷⢦⠀⢀⠟⣗⠶⡄⠀⡟⠾⣤⡏⠛⢿⠙⢿⠘⡇⠀⠀⠀⠀⠀⡆⠀⢸⠀");
        console.log("⠀⢸⠃⠀⢸⠀⠀⣿⠊⣰⠃⢀⡏⠀⠀⢰⠃⢰⠁⠀⣿⠀⠀⠀⢸⠀⠀⢳⡏⠀⢸⠀⣿⡾⠀⠀⠈⢹⡄⠀⠀⠀⠀⢳⠀⠀⠀⠀⠀⡇⠀⡌⠀");
        console.log("⠀⡞⠓⠠⠚⠦⣀⣀⣰⠃⠀⡜⠀⠀⠀⡏⠀⡾⠀⢸⣿⠀⠀⠀⢸⠀⠀⠀⡇⠀⠀⡆⢻⠀⠀⠀⠀⠀⠇⠀⠀⠀⠀⠈⡄⠀⠀⠀⢸⠇⢠⡇⠀");
        console.log("⠀⣯⠉⠑⠒⠂⠠⢤⡟⠀⢸⠁⠀⠀⢸⠁⠀⠁⠀⡜⢸⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⢱⢸⠀⠀⠀⠀⠀⢰⠀⠀⠀⠀⣀⠧⠤⠤⠤⣼⣀⣸⠀⠀");
        console.log("⢀⡇⠀⣀⠀⠀⠀⡼⠀⢀⡇⠀⠀⠀⡎⠀⠀⠀⠀⠇⣸⠀⠀⠀⠀⠀⠀⠀⠇⠀⠀⠘⡆⡄⠀⠀⠀⠀⠸⡆⠀⠀⠀⢹⠒⠒⠒⠒⠀⠀⣹⠂⠀");
        console.log("⠈⡗⠀⣬⡭⣽⣺⠇⠀⡼⠀⠀⠀⠀⡇⠀⠀⠀⢸⠀⢻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠹⡀⠀⠀⠀⠀⣧⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⡇⠀⠀");
        console.log("⢰⠀⠀⠈⠉⠀⢳⠀⢠⠇⠀⠀⠀⠀⠁⠀⠀⠀⣿⠀⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢲⠸⠀⢣⠀⠀⠀⠀⢹⢦⡀⠰⣍⣉⣉⣀⠀⠀⢸⡁⠀⠀");
        console.log("⢸⠀⠀⠀⠀⠀⢸⡇⠸⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡄⠀⢸⠀⠀⠀⠀⠈⢀⣹⠞⠁⠉⠙⠂⠉⠙⡶⠃⠀⠀");
        console.log("⣸⠀⠀⠀⠀⢀⣿⣅⣦⠀⠀⠀⠀⠀⢸⡀⠀⠀⠘⡆⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⣀⡜⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀");
        console.log("\ud83d\ude31 SANGOKU WIN !  Fin de partie !!!! \ud83d\ude31");
    }
    else {
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠻⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⢿⣿⣿⣿");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⢸⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡄⠀⠀⠀⢸⣿⣿⣿");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⠀⠀⢸⣿⣿⣿");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡆⣀⣀⣼⣿⣿⣿");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠋⠘⣿⣿⣿⣿⠟");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⣀⣤⣤⡀⠀⠘⢿⡿⢣⣾");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣎⠙⢦⠀⢸⡇⠀⠀⣀⣤⣶⡶⠋⠁⠀⠀⣀⣤⣶⣿⣿⣿⣿⣿⣮⠆⠀⠀⣿⡿");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡌⠛⢿⣿⣿⣧⠀⠳⣾⣿⣶⣾⣿⠟⠉⠀⠀⣠⣴⣾⣿⡿⠿⠛⡿⠉⠁⠀⠀⠀⠀⣼⣿⠀");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠻⢿⣿⣧⡀⠙⠛⠛⠛⠁⠀⣠⣴⡿⢿⣿⡿⠋⠀⢀⡰⠀⠀⠀⠀⠀⠀⡾⠛⣋⣵");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣦⣤⣬⣽⡆⡀⢹⣶⣶⣿⣿⣧⣤⣴⣶⣦⣭⣭⠤⠄⠀⠀⠀⠀⢀⣠⠷⠞⣋⣥");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣄⠀⠈⣿⣿⠚⠋⠉⠻⣿⣿⣿⣿⡿⠛⠉⠀⠀⠀⠀⠀⠀⢀⠎⠀⠸⣾⣿⣿");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣠⣿⡿⠀⠀⠀⠀⠀⠙⠿⠉⠀⠀⠀⠀⠀⠀⠀⠀⢀⠎⠀⠀⠀⣿⣿⣿");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣃⣠⡴⠂⠀⠀⠀⣠⠝⠁⠀⠀⠀⠀⠀⣠⠔⠁⠀⠀⠀⠀⠏⠙⠛");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣉⠉⠉⠁⠀⠀⠀⠀⠀⢀⣤⡞⠁⠀⠀⠀⠀⠀⠀⢐⠀⠀");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⢿⡿⢟⣯⣭⣭⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠛⠓⠀⠀⢀⣠⣶⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠸⣷⣄");
        console.log("⣿⣿⣿⣿⣿⡿⢋⣡⣴⡶⣊⣵⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⣀⣀⣤⣶⣿⣿⡿⠁⣠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙");
        console.log("⣿⣿⣿⡿⢋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⡟⣠⣾⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
        console.log("⣿⣿⣯⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⣰⣿⣿⠏⣴⡟⣿⣿⣿⣿⣦⣀⠀⠀⡀⠀⠀⠀⠚");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠈⠙⠿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⡇⣼⣿⣿⣏⣰⣿⣤⡽⠟⠋⠉⠉⠙⠉⠉⠀⠀⠀⣠⣤");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠘⢿⣿⣿⣦⠀⠀⠀⠀⠈⠙⠻⢿⣿⣿⣿⣿⣿⣿⡿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⠟⠁");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠈⢻⣿⣿⣧⡀⠀⠀⠀⠀⣰⣾⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠟⠁⠀⠀");
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠙⠿⠿⣷⣄⣀⣀⣼⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⢀⣀⠤⠐⠈⠀⠀⠀⠀⠀⠀");
        console.log("\ud83d\ude31 VEGETA WIN !  Fin de partie !!!! \ud83d\ude31");

    }
}

while (PlayerOne.pv > 1 && PlayerTwo.pv > 1) {
    let choice = choicePlayer()
    attaquePOne(choice, PlayerTwo, PlayerOne)
    let indexRandomAtk = randomize(0, PlayerTwo.attack.length - 1)
    let atkPlayerTwo = PlayerTwo.attack[indexRandomAtk]
    attaquePOne(atkPlayerTwo, PlayerOne, PlayerTwo)
}
return ascii()

