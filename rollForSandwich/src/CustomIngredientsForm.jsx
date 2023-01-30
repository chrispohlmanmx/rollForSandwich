import { useCallback, useState } from "react";

export default function CustomIngredientsForm({
    ingredientType,
    useCustomIngredients,
}) {
    const [isSaved, setIsSaved] = useState(false);
    const [sandwichIngredients, setSandwichIngredients] = useState([
        "",
        "",
        "",
    ]);
    const handleIngredientChange = useCallback((event) => {
        const index = parseInt(event.target.dataset.index, 10);
        setSandwichIngredients((sandwichIngredients) => {
            const newSandwichIngredients = [...sandwichIngredients];
            newSandwichIngredients[index] = event.target.value;
            return newSandwichIngredients;
        });
    }, []);
    function addIngredient(event) {
        event.preventDefault();
        setSandwichIngredients((sandwichIngredients) => [
            ...sandwichIngredients,
            "",
        ]);
    }

    function saveIngredients(event) {
        event.preventDefault();
        sessionStorage.setItem(
            ingredientType,
            JSON.stringify(sandwichIngredients.filter(Boolean), null, 2)
        );
        setIsSaved(true);
    }

    function handleEditClick(event) {
        event.preventDefault();
        setIsSaved(false);
    }

    if (isSaved) {
        return (
            <div>
                <h3>{ingredientType}</h3>
                <p>Saved!</p>
                <button onClick={handleEditClick}>Edit</button>
            </div>
        );
    }

    return (
        <form>
            <h3>{ingredientType}</h3>
            {sandwichIngredients.map((ingredient, index) => (
                <div key={index}>
                    <input
                        value={ingredient}
                        data-index={index}
                        onChange={handleIngredientChange}
                        placeholder="Enter ingredient here..."
                    />
                </div>
            ))}
            <button onClick={addIngredient}>Add ingredient</button>
            <button onClick={saveIngredients}>Save</button>
        </form>
    );
}
