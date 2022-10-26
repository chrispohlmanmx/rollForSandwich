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
    "Bologna",
    "Braunschweiger",
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
const getUserFoodsButton = document.querySelector("#get-user-foods");
const submitUserFoodsButton = document.querySelector("#submit-user-foods");
const landingSection = document.querySelector("#landing");
const sandwichSection = document.querySelector("#sandwich");
const userFoodsSection = document.querySelector("#user-foods");

firstRollButton.addEventListener("click", firstRoll);
rollAgainButton.addEventListener("click", roll);
getUserFoodsButton.addEventListener("click", showUserFoodsForm);
submitUserFoodsButton.addEventListener("click", getUserFoods);

function firstRoll() {
    landingSection.classList.add("hidden");
    sandwichSection.classList.remove("hidden");
    console.log("I was called");
    localStorage.setItem("useUserFoods", "False");
    roll();
}

function roll() {
    var breadsSelection;
    var meatsSelection;
    var cheesesSelection;
    var veggiesSelection;
    var condimentsSelection;

    var useUserFoods = localStorage.getItem("useUserFoods");

    console.log(useUserFoods);

    if (useUserFoods === "true") {
        userBreads = localStorage.getItem("breads").split(",");
        userMeats = localStorage.getItem("meats").split(",");
        userCheeses = localStorage.getItem("cheeses").split(",");
        userVeggies = localStorage.getItem("veggies").split(",");
        userCondiments = localStorage.getItem("condiments").split(",");

        breadsSelection = userBreads[getRandomInt(userBreads.length)];
        meatsSelection = userMeats[getRandomInt(userMeats.length)];
        cheesesSelection = userCheeses[getRandomInt(userCheeses.length)];
        veggiesSelection = userVeggies[getRandomInt(userVeggies.length)];
        condimentsSelection =
            userCondiments[getRandomInt(userCondiments.length)];
    } else {
        breadsSelection = breads[getRandomInt(breads.length)];
        meatsSelection = meats[getRandomInt(meats.length)];
        cheesesSelection = cheeses[getRandomInt(cheeses.length)];
        veggiesSelection = veggies[getRandomInt(veggies.length)];
        condimentsSelection = condiments[getRandomInt(condiments.length)];
    }
    const breadDiv = document.querySelector("#bread div.card-body");
    const meatDiv = document.querySelector("#meat div.card-body");
    const cheeseDiv = document.querySelector("#cheese div.card-body");
    const veggieDiv = document.querySelector("#veggies div.card-body");
    const condimentDiv = document.querySelector("#condiments div.card-body");

    removeChildren(breadDiv);
    removeChildren(meatDiv);
    removeChildren(cheeseDiv);
    removeChildren(veggieDiv);
    removeChildren(condimentDiv);

    const breadSpan = document.createElement("span");
    breadSpan.classList.add(
        "card-text",
        "font-weight-bold",
        "text-center",
        "text-capitalize"
    );
    breadSpan.innerText = breadsSelection;
    breadDiv.appendChild(breadSpan);

    const meatSpan = document.createElement("span");
    meatSpan.classList.add(
        "card-text",
        "font-weight-bold",
        "text-center",
        "text-capitalize"
    );
    meatSpan.innerText = meatsSelection;
    meatDiv.appendChild(meatSpan);

    const cheeseSpan = document.createElement("span");
    cheeseSpan.classList.add(
        "card-text",
        "font-weight-bold",
        "text-center",
        "text-capitalize"
    );
    cheeseSpan.innerText = cheesesSelection;
    cheeseDiv.appendChild(cheeseSpan);

    const veggieSpan = document.createElement("span");
    veggieSpan.classList.add(
        "card-text",
        "font-weight-bold",
        "text-center",
        "text-capitalize"
    );
    veggieSpan.innerText = veggiesSelection;
    veggieDiv.appendChild(veggieSpan);

    const condimentSpan = document.createElement("span");
    condimentSpan.classList.add(
        "card-text",
        "font-weight-bold",
        "text-center",
        "text-capitalize"
    );
    condimentSpan.innerText = condimentsSelection;
    condimentDiv.appendChild(condimentSpan);

    // console.log(
    //     `Bread: ${breadsSelection}, Meat: ${meatsSelection}, Cheese: ${cheesesSelection}, Veggie: ${veggiesSelection}, Condiments: ${condimentsSelection}`
    // );
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function removeChildren(domNode) {
    while (domNode.firstChild) {
        domNode.removeChild(domNode.firstChild);
    }
}

function showUserFoodsForm() {
    landingSection.classList.add("hidden");
    userFoodsSection.classList.remove("hidden");
}

function getUserFoods() {
    const breadsTextArea = document.querySelector("#breads");
    const meatsTextArea = document.querySelector("#meats");
    const cheesesTextArea = document.querySelector("#cheeses");
    const veggiesTextArea = document.querySelector("#veggies");
    const condimentsTextArea = document.querySelector("#condiments");

    const breadsList = breadsTextArea.value.split(",");
    const meatsList = meatsTextArea.value.split(",");
    const cheesesList = cheesesTextArea.value.split(",");
    const veggiesList = veggiesTextArea.value.split(",");
    const condimentsList = condimentsTextArea.value.split(",");

    localStorage.setItem("breads", breadsList);
    localStorage.setItem("meats", meatsList);
    localStorage.setItem("cheeses", cheesesList);
    localStorage.setItem("veggies", veggiesList);
    localStorage.setItem("condiments", condimentsList);
    localStorage.setItem("useUserFoods", "true");

    userFoodsSection.classList.add("hidden");
    landingSection.classList.add("hidden");
    sandwichSection.classList.remove("hidden");
    roll();
}
