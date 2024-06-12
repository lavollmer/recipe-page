import TextBlock from "./TextBlock";
import omeletteImage from "./assets/omelette.jpeg";

function App() {
  return (
    <>
      <div>
        <div>
          <img src={omeletteImage} alt="Omelette" />
        </div>
        <div>
          <h1>Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div>
            <h2>Preparation Time </h2>
            <ul>
              <li>Total: Approximately 10 minutes</li>
              <li>Preparation: 5 minutes</li>
              <li>Cooking: 5 minutes</li>
            </ul>
          </div>
        </div>
        <div>
          <h2>Ingredients </h2>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>
        <div>
          <h2>Instructions</h2>
          <ol>
            <li>Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li>Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil. Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. </li>
            <li>Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. </li>
            <li>Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette. </li>
            <li> Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
            <li>Enjoy: Serve hot, with additional salt and pepper if needed. Nutrition The table below shows nutritional values per serving without the additional fillings.</li>
          </ol>
        </div>
        <div>
          <h1>Nutrition</h1>
          <p>The table below shows nutritional values per serving without the additional fillings.</p>
        </div>
      </div>
    </>
  );
}

export default App;
