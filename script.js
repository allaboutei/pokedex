// Filter Drop Down
const sortByNumber = () => {
  alert("Please wait, I'm still learning Javascript");
};
const sortByAz = () => {
  alert("Please wait, I'm still learning Javascript");
};
const sortByZa = () => {
  alert("Please wait, I'm still learning Javascript");
};

const sortByFire = () => {
  alert("Please wait, I'm still learning Javascript");
};
const sortByElectric = () => {
  alert("Please wait, I'm still learning Javascript");
};
const sortByWater = () => {
  alert("Please wait, I'm still learning Javascript");
};
const sortByGrass = () => {
  alert("Please wait, I'm still learning Javascript");
};

const ByNumber = document.getElementById("sortByNumber");
const ByAz = document.getElementById("sortByAz");
const ByZa = document.getElementById("sortByZa");

ByNumber.addEventListener("click", sortByNumber);
ByAz.addEventListener("click", sortByAz);
ByZa.addEventListener("click", sortByZa);

const ByFire = document.getElementById("fireButton");
const ByElectric = document.getElementById("electricButton");
const ByWater = document.getElementById("waterButton");
const ByGrass = document.getElementById("grassButton");

ByFire.addEventListener("click", sortByFire);
ByElectric.addEventListener("click", sortByElectric);
ByWater.addEventListener("click", sortByWater);
ByGrass.addEventListener("click", sortByGrass);
// Filter Drop Down

// pokemon autoComplete
const pokemons = [
  {
    id: 1,
    name: "Pikachu",
    type: "Eletric",
    image: "images/pikachu.png",
    des: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
    colorClass: "electric",
    colorType: "electrict",
  },
  {
    id: 2,
    name: "Charmander",
    type: "Fire",
    image: "images/charmandar.png",
    des: "The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly.",
    colorClass: "fire",
    colorType: "firet",
  },
  {
    id: 3,
    name: "Bulbasur",
    type: "Grass",
    image: "images/Bulbasur.png",
    des: "For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.",
    colorClass: "grass",
    colorType: "grasst",
  },
  {
    id: 4,
    name: "Growlithe",
    type: "Fire",
    image: "images/Growlithe.png",
    des: "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
    colorClass: "fire",
    colorType: "firet",
  },
  {
    id: 5,
    name: "Piplup",
    type: "Water",
    image: "images/Piplup.png",
    des: "A poor walker, it often falls down. However, its strong pride makes it puff up its chest without a care.",
    colorClass: "water",
    colorType: "watert",
  },
  {
    id: 6,
    name: "Squirtle",
    type: "Water",
    image: "images/Squirtle.png",
    des: "After birth, its back swells and hardens into a shell. It sprays a potent foam from its mouth.",
    colorClass: "water",
    colorType: "watert",
  },
  {
    id: 7,
    name: "Mew",
    type: "Psychic",
    image: "images/Mew.png",
    des: "When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.",
    colorClass: "psychic",
    colorType: "psychict",
  },
  {
    id: 8,
    name: "Zapdos",
    type: "Eletric",
    image: "images/Zapdos.png",
    des: "This legendary Pokémon is said to live in thunderclouds. It freely controls lightning bolts.",
    colorClass: "electric",
    colorType: "electrict",
  },
  {
    id: 9,
    name: "Entei",
    type: "Fire",
    image: "images/Entei.png",
    des: "Entei embodies the passion of magma. This Pokémon is thought to have been born in the eruption of a volcano. It sends up massive bursts of fire that utterly consume all that they touch.",
    colorClass: "fire",
    colorType: "firet",
  },
  {
    id: 10,
    name: "Tototile",
    type: "Water",
    image: "images/totodile.webp",
    des: "Its powerful, well-developed jaws are capable of crushing anything. Even its Trainer must be careful.",
    colorClass: "water",
    colorType: "watert",
  },
];

const mainTag = document.getElementsByClassName("main")[0];

// creating pokemon body

for (let i = 0; i < pokemons.length; i++) {
  mainTag.innerHTML += `<div class="pokebox">
  <div class="pokemon">
  <img class="wh100" src="${pokemons[i].image}" alt="" />
  </div> 
  <div class="pokedetail ${pokemons[i].colorClass}">
  <h3>${pokemons[i].name}</h3>
  <h4>#${pokemons[i].id}</h4> 
  <p class="type ${pokemons[i].colorType}">${pokemons[i].type}</p> 
  </div> 
  </div>`;
}
// creating pokemon body

// pokemon autoComplete
const pokeSearchTag = document.getElementsByClassName("searchInput")[0];
const pokeResultTag = document.getElementsByClassName("resultContainer")[0];

let filteredPokemons = [];
pokeSearchTag.addEventListener("keyup", (event) => {
  if (
    event.key === "ArrowDown" ||
    event.key === "ArrowUp" ||
    event.key === "Enter"
  ) {
    navigateAndSelectPokemon(event.key);
    return;
  }
  pokeResultTag.innerHTML = "";
  pokeResultTag.classList.add("hidden");
  const searchText = event.target.value.toLowerCase();
  if (searchText.length === 0) {
    return;
  }

  filteredPokemons = pokemons.filter((pokemons) => {
    return pokemons.name.toLowerCase().includes(searchText);
  });

  const hasPokemonToShow = filteredPokemons.length > 0;
  if (hasPokemonToShow) {
    pokeResultTag.innerHTML = "";
    for (let i = 0; i < filteredPokemons.length; i++) {
      const creatureContainer = document.createElement("div");
      creatureContainer.classList.add("searchedPokemons");
      creatureContainer.innerHTML = `<div class="creatureContainer" id="${filteredPokemons[i].id}">
      <div class="pokemonName"> ${filteredPokemons[i].name} </div>
      <div class="pokemonType"> ${filteredPokemons[i].type}</div>
      <img class="pokemonImage" src="${filteredPokemons[i].image}" alt="">
  </div>`;
      pokeResultTag.append(creatureContainer);
      pokeResultTag.classList.remove("hidden");
    }
  }
});
const searchedPokemonsTag = document.getElementsByClassName("searchedPokemons");
console.log(searchedPokemonsTag);
// searched pokemons selection
let indexToSelect = 0;

const navigateAndSelectPokemon = (key) => {
  if (key === "ArrowDown") {
    if (indexToSelect == searchedPokemonsTag.length) {
      indexToSelect = 0;
    }

    searchedPokemonsTag[indexToSelect].classList.add("selected");
    indexToSelect += 1;
  } else if (key === "ArrowUp") {
  }
};

// searched pokemons selection
// const deselectPokemon = () => {
//   const pokemonToSelect = document.getElementsByClassName("selected")[0];
//   pokemonToSelect.style.backgroundColor = "white";
//   pokemonToSelect.firstChild.style.color = "black";
//   pokemonToSelect.classList.remove("selected");
// };

// const selectPokemon = (index) => {
//   const pokemonIdToSelect = filteredPokemons[index].id.toString();

//   const creatureContainerToSelect = document.getElementById(pokemonIdToSelect);
//   creatureContainerToSelect.style.backgroundColor = "blue";
//   creatureContainerToSelect.firstChild.style.color = "white";

//   return creatureContainerToSelect;
// };
// searched pokemons selection

// Footer testing
const imageTag = document.getElementsByClassName("pokeball")[0];
const myButton = document.getElementById("ballButton");

const orgImage = imageTag.src;
const orgText = myButton.textContent;
const orgBackground = myButton.style.backgroundColor;
const orgColor = myButton.style.color;

const pokeballs = [
  {
    id: 1,
    image: "images/pokeball.png",
    name: "Classic Ball",
    color: "rgb(235,0,10)",
  },
  {
    id: 2,
    image: "images/masterball.png",
    name: "Master Ball",
    color: "rgb(94,57,135)",
  },
  {
    id: 3,
    image: "images/greatball.png",
    name: "Great Ball",
    color: "rgb(0,127,206)",
  },
  {
    id: 4,
    image: "images/netball.png",
    name: "Net Ball",
    color: "rgb(10,147,147)",
  },
  {
    id: 5,
    image: "images/quickball.png",
    name: "Quick Ball",
    color: "rgb(238,235,86)",
  },
];

let i = 0;
const toggleImage = () => {
  if (i >= pokeballs.length) {
    imageTag.src = orgImage;
    myButton.textContent = orgText;
    myButton.style.backgroundColor = orgBackground;
    myButton.style.color = orgColor;
    i = 0;
    return;
  }

  imageTag.src = pokeballs[i].image;
  myButton.textContent = "This is the " + pokeballs[i].name;
  myButton.style.backgroundColor = pokeballs[i].color;
  myButton.style.color = "white";
  i++;
};
myButton.addEventListener("click", toggleImage);
// Footer testing

// pokemon details
const pokeboxElements = document.getElementsByClassName("pokebox");
const closeIcon = document.getElementsByClassName("fa-circle-xmark")[0];

closeIcon.addEventListener("click", () => {
  showDetailTag.classList.add("hidden");
  mainTag.classList.remove("blur");
});
let clickedTabid;
const toggleDetail = (i) => {

  handleTagChange(0);
 
  console.log(clickedTabid);
  showDetailTag = document.getElementsByClassName("hiddenDetail")[0];
  mainTag.classList.add("blur");
  showDetailTag.classList.remove("hidden");
  let desTmageTag = document.getElementsByClassName("desImage")[0];
  let desTextTag = document.getElementsByClassName("desText")[0];
  desTmageTag.src = pokemons[i].image;
  desTextTag.textContent = pokemons[i].des;
};

for (let i = 0; i < pokeboxElements.length; i++) {
  pokeboxElements[i].addEventListener("click", () => {
    toggleDetail(i);
  });
}
// pokemon details

//tab menu slider


const tabs = ["about", "moves", "weakness against", "effective against"];
const ulTag = document.querySelector("ul");
const silderTag = document.querySelector(".slider");

function handleTagChange(event){
  if(typeof event == "number"){
    clickedTabid=event;
  
  }
  else {
  clickedTabid=event.target.id;
  };
  console.log(clickedTabid);
 const clickedLiTag=document.getElementById(clickedTabid);
 
const clickedLiTagOffsetLeft=clickedLiTag.offsetLeft;
const clickedLiTagOffsetWidth=clickedLiTag.offsetWidth;
silderTag.style.width=clickedLiTagOffsetWidth+"px";
silderTag.style.transform=`translateX(${clickedLiTagOffsetLeft}px )`;
console.log(clickedLiTag);
// console.log(clickedLiTagOffsetLeft);
// console.log(clickedLiTagOffsetWidth);
};


for (let i = 0; i < tabs.length; i++) {
  const liTag = document.createElement("li");
  liTag.textContent = tabs[i].toUpperCase();
  liTag.id = i;
  ulTag.appendChild(liTag);
  liTag.addEventListener("click", handleTagChange);
  console.log("lee");
};

alert("hello");
// window.onload=defaultSlider;

//tab menu slider
