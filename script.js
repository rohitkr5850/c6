document.getElementById("get-category-data").addEventListener("click", getCategoriesData);
document.getElementById("get-ingredient-data").addEventListener("click", getIngredientData);

const baseURL = "https://www.themealdb.com/api.php?ref=p.rapidapi.com";

// Fetch category data
async function getCategoriesData() {
    const url = ${baseURL}/api/json/v1/1/filter.php?c=Seafood;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        displayData(data.meals, "Category Data:");
    } catch (error) {
        console.error("Error fetching category data:", error);
        displayError("Something went wrong with fetching category data.");
    }
}

// Fetch ingredient data
async function getIngredientData() {
    const url = ${baseURL}/api/json/v1/1/filter.php?i=chicken_breast;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        displayData(data.meals, "Ingredient Data:");
    } catch (error) {
        console.error("Error fetching ingredient data:", error);
        displayError("Something went wrong with fetching ingredient data.");
    }
}

// Display data in the output section
function displayData(data, title) {
    const output = document.getElementById("output");
    output.innerHTML = <h2>${title}</h2>;
    data.forEach(meal => {
        output.innerHTML += <p>${meal.strMeal}</p>;
    });
}

// Display error message
function displayError(message) {
    const output = document.getElementById("output");
    output.innerHTML = <p style="color: red;">${message}</p>;
}