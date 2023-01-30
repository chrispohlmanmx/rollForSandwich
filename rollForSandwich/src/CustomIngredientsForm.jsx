export default function CustomIngredientsForm() {
    const [sandwichIngredients, setSandwichIngredients] = useState([
        "",
        "",
        "",
    ]);
    const handleIngredientChange = useCallback((event) => {
        const index = parseInt(event.target.dataset.index, 10);
        setSandwichIngredients((inviteEmails) => {
            const newSandwichIngredients = [...sandwichIngredients];
            newSandwichIngredients[index] = event.target.value;
            return newSandwichIngredients;
        });
    }, []);
    const removeIngredient = useCallback((event) => {
        const index = parseInt(event.target.dataset.index, 10);
        setSandwichIngredients((sandwichIngredients) => {
            const newSandwichIngredients = [...sandwichIngredients];
            newSandwichIngredients.splice(index, 1);
            return newSandwichIngredients;
        });
    }, []);
    const addIngredient = useCallback(
        () =>
            setSandwichIngredients((sandwichIngredients) => [
                ...sandwichIngredients,
                "",
            ]),
        []
    );

    return (
        <div>
            {sandwichIngredients.map((email, index) => (
                <div key={index}>
                    <input
                        value={email}
                        data-index={index}
                        onChange={handleIngredientChange}
                        placeholder="Enter ingredient here..."
                    />
                    <button onClick={removeIngredient} data-index={index}>
                        &times;
                    </button>
                </div>
            ))}
            <button onClick={addIngredient}>Add ingredient</button>
        </div>
    );
}
