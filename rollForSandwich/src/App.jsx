import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Header";
import CustomIngredientsForm from "./CustomIngredientsForm";

const breadsList = [
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
const meatsList = [
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
const cheesesList = [
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
const veggiesList = [
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
const condimentsList = [
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

const imageMap = {
    0: "bread.svg",
    1: "meat.svg",
    2: "cheese.svg",
    3: "veggies.svg",
    4: "condiments.svg",
};

function App() {
    const [rolled, setRolled] = useState(false);
    const [sandwich, setSandwich] = useState([]);
    const [useCustomIngredients, setUseCustomIngredients] = useState(false);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    function roll() {
        var breadsSelection = breadsList[getRandomInt(breadsList.length)];
        var meatsSelection = meatsList[getRandomInt(meatsList.length)];
        var cheesesSelection = cheesesList[getRandomInt(cheesesList.length)];
        var veggiesSelection = veggiesList[getRandomInt(veggiesList.length)];
        var condimentsSelection =
            condimentsList[getRandomInt(condimentsList.length)];

        // console.log(
        //     `${breadsSelection} + ${meatsSelection} + ${cheesesSelection} + ${veggiesSelection} + ${condimentsSelection}`
        // );

        //render sandwich ingredients to the screen
        const newSandwich = [
            breadsSelection,
            meatsSelection,
            cheesesSelection,
            veggiesSelection,
            condimentsSelection,
        ];
        setRolled(true);
        setSandwich(newSandwich);
    }

    function handleCustomizeIngredientsClick() {
        setUseCustomIngredients(true);
    }

    if (rolled) {
        const sandwichIngredients = sandwich.map((ingredient) => (
            <li key={sandwich.indexOf(ingredient)} className="ingredientCard">
                <img
                    className="ingredientImg"
                    src={`images/${imageMap[sandwich.indexOf(ingredient)]}`}
                ></img>
                {ingredient}
            </li>
        ));
        return (
            <>
                <Header />
                <div>
                    <ul className="ingredients">{sandwichIngredients}</ul>
                    <button onClick={roll}>Roll Again?</button>
                </div>
            </>
        );
    }

    if (useCustomIngredients) {
        return (
            <>
                <Header />
                <CustomIngredientsForm />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="App">
                <button onClick={roll}>Roll</button>
                <button onClick={handleCustomizeIngredientsClick}>
                    Customize Ingredients
                </button>
            </div>
        </>
    );
}

export default App;
