import { useEffect, useState } from "react";

interface Recipe {
  id: number;
  name: string;
  image: string;
  difficulty: string;
  cuisine: string;
}

const RecipeGallery = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");

      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const data = await response.json();
      setRecipes(data.recipes);
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <div className="container text-center">
        <h2 className="text-primary">Loading recipes...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center">
        <h2 className="text-danger fw-bold">{error}</h2>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-danger fw-bold">Recipe Gallery</h1>

      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-3 mb-4" key={recipe.id}>
            <div className="card h-100 d-flex flex-column">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="card-img-top"
              />

              <div className="card-body d-flex flex-column">
                <h4 className="card-title text-danger">{recipe.name}</h4>

                <div className="flex-grow-1"></div>

                <a href="#" className="btn btn-primary mt-auto">
                  View Recipe
                </a>
              </div>

              <div className="card-footer text-muted">
                {recipe.cuisine} • {recipe.difficulty}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeGallery;
