let pokemon = [ //creating an array of objects
    {
        "name": "Bulbasaur",
        "num": "1",
        "atk": 118,
        "def": 118,
        "typeOne": "Grass",
        "typeTwo": "Poison",
    },

    {
        "name": "Ivysaur",
        "num": "2",
        "atk": 151,
        "def": 151,
        "typeOne": "Grass",
        "typeTwo": "Poison",
    },

    {
        "name": "Venasaur",
        "num": "3",
        "atk": 198,
        "def": 198,
        "typeOne": "Grass",
        "typeTwo": "Poison",
    },

    {
        "name": "Charmander",
        "num": "4",
        "atk": 116,
        "def": 96,
        "typeOne": "Fire",
        "typeTwo": "None",
    },

    {
        "name": "Charmeleon",
        "num": "5",
        "atk": 158,
        "def": 128,
        "typeOne": "Fire",
        "typeTwo": "None",
    },

    {
        "name": "Charizard",
        "num": "6",
        "atk": 223,
        "def": 176,
        "typeOne": "Fire",
        "typeTwo": "Flying",
    },

    {
        "name": "Squirtle",
        "num": "7",
        "atk": 94,
        "def": 122,
        "typeOne": "Water",
        "typeTwo": "None",
    },

    {
        "name": "Wartortle",
        "num": "8",
        "atk": 126,
        "def": 155,
        "typeOne": "Water",
        "typeTwo": "None",
    },

    {
        "name": "Blastoise",
        "num": "9",
        "atk": 171,
        "def": 210,
        "typeOne": "Water",
        "typeTwo": "None",
    },

    {
        "name": "Caterpie",
        "num": "10",
        "atk": 55,   
        "def": 62,
        "typeOne": "Bug",
        "typeTwo": "None",
    },

    {
        "name": "Metapod",
        "num": "11",
        "atk": 45,
        "def": 94,
        "typeOne": "Bug",
        "typeTwo": "None",
    },

    {
        "name": "Butterfree",
        "num": "12",
        "atk": 167,
        "def": 151,
        "typeOne": "Bug",
        "typeTwo": "Flying",
    },

    {
        "name": "Weedle",
        "num": "13",
        "atk": 63,
        "def": 55,
        "typeOne": "Bug",
        "typeTwo": "Poison",
    },

    {
        "name": "Kakuna",
        "num": "14",
        "atk": 46,
        "def": 86,
        "typeOne": "Bug",
        "typeTwo": "Poison",
    },

    {
        "name": "Beedrill",
        "num": "15",
        "atk": 169,
        "def": 150,
        "typeOne": "Bug", 
        "typeTwo": "Poison",
    },

    {
        "name": "Pidgey",
        "num": "16",
        "atk": 85,
        "def": 76,
        "typeOne": "Normal",
        "typeTwo": "Flying",
    },

    {
        "name": "Pidgeotto",
        "num": "17",
        "atk": 117,
        "def": 108,
        "typeOne": "Normal",
        "typeTwo": "Flying",
    },

    {
        "name": "Pidgeot",
        "num": "18",
        "atk": 166,
        "def": 157,
        "typeOne": "Normal",
        "typeTwo": "Flying",
    },

    {
        "name": "Rattata",
        "num": "19",
        "atk": 103,
        "def": 70,
        "typeOne": "Normal",
        "typeTwo": "None",
    },

    {
        "name": "Raticate",
        "num": "20",
        "atk": 161,
        "def": 144,
        "typeOne": "Normal",
        "typeTwo": "None",
    },
];

function findByNum () {
    var num = document.getElementById("textfieldnum").value; //gets the value from the textfield
    var container = document.getElementById("dynamicsearch");
    container.style.display = "block"; //makes the container appear
    var ul = document.getElementById("dynamicsearchlist");

    //delete all elements from list to reset to bring dynamic feel
    while (ul.firstChild){
        ul.removeChild(ul.firstChild);
    }

    if (num != ""){ //to ensure that when empty string is inputted nothing executes
        for (i = 0; i < pokemon.length; i++){ //iterates through the array of objects
            var tempnum = pokemon[i].num; 
    
            if (tempnum.includes(num)) { //when the temporary string contains the submitted string
                var pokemonnum, pokemonname, pokemonattk, pokemondef, pokemontypeone, pokemontypetwo, pokemontypetwoexist;
    
                pokemonnum = pokemon[i].num;
                pokemonname = pokemon[i].name;
                pokemonattk = pokemon[i].atk;
                pokemondef = pokemon[i].def;
                pokemontypeone = pokemon[i].typeOne;
                pokemontypetwo = pokemon[i].typeTwo;
    
                if (pokemon[i].typeTwo == "None"){ //checking if there is a second type for the pokemon
                    pokemontypetwoexist = false;
                }
                else{
                    pokemontypetwoexist = true;
                }
                createPokemonCard(pokemonnum, pokemonname, pokemonattk, pokemondef, pokemontypeone, pokemontypetwo, pokemontypetwoexist); //call on function to create card
            }
        }
    }
    else{
        container.style.display = "none"; //makes the container dissapear
    }
}

function findByChar () {
    var char = document.getElementById("textfieldchar").value; //gets value from the textfield
    var container = document.getElementById("dynamicsearch");
    container.style.display = "block"; //makes the container appear
    var ul = document.getElementById("dynamicsearchlist");

    //delete all elements from list to reset to bring dynamic feel
    while (ul.firstChild){
        ul.removeChild(ul.firstChild);
    }

    if (char != ""){
        for (i = 0; i < pokemon.length; i++){ //iterates through the array of objects
            var str = pokemon[i].name; //holds current pokemons' name
            var lowerstr = (pokemon[i].name).toLowerCase(); //holds the lowercase of the previous string
    
            if (str.includes(char) || lowerstr.includes(char)) { //if the current pokemons' name or the lowercase version contains the submitted characters
                var pokemonnum, pokemonname, pokemonattk, pokemondef, pokemontypeone, pokemontypetwo, pokemontypetwoexist;
            
                pokemonnum = pokemon[i].num;
                pokemonname = pokemon[i].name;
                pokemonattk = pokemon[i].atk;
                pokemondef = pokemon[i].def;
                pokemontypeone = pokemon[i].typeOne;
                pokemontypetwo = pokemon[i].typeTwo;
    
                if (pokemon[i].typeTwo == "None"){ //checking if there is a second type for the pokemon
                    pokemontypetwoexist = false;
                }
                else{
                    pokemontypetwoexist = true;
                }
                createPokemonCard(pokemonnum, pokemonname, pokemonattk, pokemondef, pokemontypeone, pokemontypetwo, pokemontypetwoexist); //call on function to create card
            }
        }
    }
    else{
        container.style.display = "none"; //makes the container dissapear
    }
}   

function createPokemonCard (pknum, pkname, pkattk, pkdef, pktypeone, pktypetwo, typetwoexist){
    var pokemonnum=pknum, pokemonname=pkname, pokemonattk=pkattk, pokemondef=pkdef, pokemontypeone=pktypeone, pokemontypetwo=pktypetwo;
    
    var ul = document.getElementById("dynamicsearchlist");
    var li = document.createElement("li");
    //way to prevent duplicates, set a variable in the database to false so that it wont create again

    //Creating pokemon card
    var divBorder = document.createElement("div");
    divBorder.className = "border";

    var img = document.createElement("img");
    img.src = ("pokemon/" + pokemonnum + ".png");
    img.alt = pokemonname;

    var pokenum = document.createElement("p");
    pokenum.textContent =("#" + pokemonnum);

    var pokename = document.createElement("h2");
    pokename.textContent = pokemonname;

    var pokestat = document.createElement("h3");
    pokestat.textContent = ("ATK: " + pokemonattk + " DEF: " + pokemondef);

    var type = document.createElement("div");
    type.className = "type";

    var typeContainerOne = document.createElement("div");
    typeContainerOne.className = "typecontainer";

    var typeContainerTwo = document.createElement("div");
    typeContainerTwo.className = "typecontainer";

    var typeOne = document.createElement("div");
    typeOne.className = pokemontypeone;

    var typeOneText = document.createElement("p");
    typeOneText.textContent = pokemontypeone;

    var typeTwo = document.createElement("div");
    typeTwo.className = pokemontypetwo;

    var typeTwoText = document.createElement("p");
    typeTwoText.textContent = pokemontypetwo;

    ul.appendChild(li);
    li.appendChild(divBorder);
    divBorder.appendChild(img);
    li.appendChild(pokenum);
    li.appendChild(pokename);
    li.appendChild(pokestat);
    li.appendChild(type);
    type.appendChild(typeContainerOne);
    typeContainerOne.appendChild(typeOne);
    typeOne.appendChild(typeOneText);

    if (typetwoexist){ //only if type two exists, create type two container,etc..
        type.appendChild(typeContainerTwo);
        typeContainerTwo.appendChild(typeTwo);
        typeTwo.appendChild(typeTwoText);
    }
}

