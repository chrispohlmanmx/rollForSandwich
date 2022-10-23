const breads = [
    "White Bread",
    "Sourdough",
    "Wheat Bread",
    "Baguette",
    "French Bread",
    "Texas Toast",
    "Tortilla",
    "Naan",
    "Pita",
    "brioche",
    "Ciabatta",
    "Rye",
    "Multigrain",
];
const meats = [
    "Chicken",
    "Turkey",
    "Ham",
    "Roast Beef",
    "Shredded Chicken",
    "Shredded Beef",
    "Pulled Pork",
    "Mortadella",
    "Salami",
    "Pepperoni",
    "Steak",
    "Gyro",
    "Bacon",
];
const cheeses = [
    "Cheddar",
    "American",
    "White American",
    "Colby",
    "Colby Jack",
    "Pepperjack",
    "Montery Jack",
    "Mozzarella",
    "Parmesan",
    "Muenster",
    "Havarti",
    "Provolone",
    "Gouda",
    "Smoked Gouda",
    "Bleu",
    "Swiss",
];
const veggies = [
    "Lettuce",
    "Onion",
    "Bell Pepper",
    "Jalpeno",
    "Pickles",
    "Olives",
    "Mushrooms",
    "Sprouts",
    "Spinach",
    "Roasted Red Peppers",
    "Giardinera",
    "Pickled Peppers",
    "Sweet Peppers",
    "Hot Peppers",
    "Tomato",
    "Carrot",
    "Broccoli",
    "Cabbage",
    "Cauliflower",
    "Eggplant",
    "Garlic",
    "Brussel Sprouts",
    "Beets",
];
const condiments = [
    "BBQ",
    "Steak Sauce",
    "Yellow Mustard",
    "Dijon Mustard",
    "Spicy Mustard",
    "Ketchup",
    "Mayo",
    "Sriracha",
    "Aioli",
    "Oil",
    "Vinegar",
    "Marinara",
    "Chimicurri",
    "Teriyaki",
    "Peanut Sauce",
    "Buffalo Sauce",
    "Hot Sauce",
    "Jam",
    "Jelly",
    "Pesto",
    "Hummus",
    "Cream Cheese",
    "Butter",
    "Horseradish",
    "Honey",
    "Gochujang",
    "Salsa",
    "Guacamole",
    "Sour Cream",
    "Harissa",
    "Baba Ganoush",
    "Honey Mustard",
    "Ranch",
    "Thousand Island Dressing",
    "Italian Dressing",
    "Caesar Dressing",
    "French Dressing",
    "Relish",
    "Chutney",
];

const firstRollButton = document.querySelector("#first-roll");
const rollAgainButton = document.querySelector("#roll-again");

firstRollButton.addEventListener("click", firstRoll);
rollAgainButton.addEventListener("click", roll);

function firstRoll() {
    const landingSection = document.querySelector("#landing");
    const sandwichSection = document.querySelector("#sandwich");
    landingSection.classList.replace("show", "hide");
    sandwichSection.classList.replace("hide", "show");
    roll();
}

function roll() {
    const breadDiv = document.querySelector("#bread");
    const meatDiv = document.querySelector("#meat");
    const cheeseDiv = document.querySelector("#cheese");
    const veggieDiv = document.querySelector("#veggies");
    const condimentDiv = document.querySelector("#condiments");

    const breadsSelection = breads[getRandomInt(breads.length)];
    const meatsSelection = meats[getRandomInt(meats.length)];
    const cheesesSelection = cheeses[getRandomInt(cheeses.length)];
    const veggiesSelection = veggies[getRandomInt(veggies.length)];
    const condimentsSelection = condiments[getRandomInt(condiments.length)];

    const breadSpan = document.createElement("span");
    breadSpan.innerText = breadsSelection;
    breadDiv.appendChild(breadSpan);

    const meatSpan = document.createElement("span");
    meatSpan.innerText = meatsSelection;
    meatDiv.appendChild(meatSpan);

    const cheeseSpan = document.createElement("span");
    cheeseSpan.innerText = cheesesSelection;
    cheeseDiv.appendChild(cheeseSpan);

    const veggieSpan = document.createElement("span");
    veggieSpan.innerText = veggiesSelection;
    veggieDiv.appendChild(veggieSpan);

    const condimentSpan = document.createElement("span");
    condimentSpan.innerText = condimentsSelection;
    condimentDiv.appendChild(condimentSpan);

    // console.log(
    //     `Bread: ${breadsSelection}, Meat: ${meatsSelection}, Cheese: ${cheesesSelection}, Veggie: ${veggiesSelection}, Condiments: ${condimentsSelection}`
    // );
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
