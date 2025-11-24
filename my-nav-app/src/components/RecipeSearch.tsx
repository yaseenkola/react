import { useState } from "react";
import { Link } from "react-router-dom";

type Recipe = {
  id: number;
  name: string;
  servings: number;
  cuisine: string;
  difficulty: string;
  image: string;
};

const RecipeSearch = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchRecipes = async (searchTerm: string) => {
    if (!searchTerm.trim()) return;

    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${searchTerm}`
    );
    const data = await response.json();
    setRecipes(data.recipes);
  };

  return (
    <div>
      <h1 className="text-danger fw-bold mb-4">Recipe Search</h1>

      {/* Search Box */}
      <div className="mb-4 d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search recipes (e.g. Pizza, Soup, Cake)..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button
          className="btn btn-primary ms-2"
          onClick={() => fetchRecipes(searchTerm)}
        >
          Search
        </button>
      </div>

      {/* Results */}
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-3" key={recipe.id}>
            <div className="card h-100">
              <Link to={`/recipes/${recipe.id}`}>
                <img alt="" src={recipe.image} className="card-img-top" />
              </Link>

              <div className="card-body">
                <h4 className="card-title">{recipe.name}</h4>

                <p className="card-text mb-1">
                  <span className="fw-bold">Cuisine:</span> {recipe.cuisine}
                </p>

                <p className="card-text">
                  <span className="fw-bold">Difficulty:</span>{" "}
                  {recipe.difficulty}
                </p>
              </div>

              <div className="card-footer">
                <Link to={`/recipes/${recipe.id}`}>View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
