import TextBlock from "./TextBlock";
import omeletteImage from "./assets/omelette.jpeg";

function App() {
  return (
    <>
      <div className="bg-eggshell">
        <div className="bg-white container mx-auto flex flex-col rounded-lg">
          <div className="m-10">
            <img src={omeletteImage} alt="Omelette" className="rounded-lg" />
          </div>
          <div className="container">
            <h1 className="text-dark-charcoal font-young-serif text-4xl font-bold pt-2 pb-4 pl-10">
              Simple Omelette Recipe
            </h1>
            <p className="text-wenge-brown font-outfit pt-2 pb-4 pl-10 pr-10">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
          <div className="container mx-auto">
            <div className="font-outfit bg-rose-white container p-6 rounded-lg w-3/4 mx-auto">
              <h2 className="text-dark-raspberry font-bold text-xl">
                Preparation Time
              </h2>
              {/* list-disc class is used to add bullet points and pl-5 to add padding to left */}
              <ul className="list-disc pl-5">
                <li>
                  <span className="text-dark-charcoal font-bold font-outfit">
                    Total:
                  </span>{" "}
                  Approximately 10 minutes
                </li>
                <li>
                  <span className="text-dark-charcoal font-bold font-outfit">
                    Preparation:
                  </span>{" "}
                  5 minutes
                </li>
                <li>
                  <span className="text-dark-charcoal font-bold font-outfit">
                    Cooking:
                  </span>{" "}
                  5 minutes
                </li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto">
            <h2 className="text-nutmeg font-young-serif font-bold text-3xl pt-2 pb-4 pl-10">
              Ingredients
            </h2>
            <div className="pt-2 pb-4 pl-10 pr-10">
              <ul className="text-wenge-brown font-outfit list-disc pl-5">
                <li>2-3 large eggs</li>
                <li>Salt, to taste</li>
                <li>Pepper, to taste</li>
                <li>1 tablespoon of butter or oil</li>
                <li>
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-t border-gray-400 mx-10 my-4" />
          <div className="pt-2 pb-4 pl-10 pr-10">
            <h2 className="text-nutmeg font-young-serif font-bold text-3xl mb-6">
              Instructions
            </h2>
            <ol className="text-wenge-brown font-outfit list-decimal pl-5">
              <li>
                <span className="text-dark-charcoal font-bold font-outfit">
                  Beat the eggs:
                </span>{" "}
                In a bowl, beat the eggs with a pinch of salt and pepper until
                they are well mixed. You can add a tablespoon of water or milk
                for a fluffier texture.
              </li>
              <li>
                <span className="text-dark-charcoal font-bold font-outfit">
                  Heat the pan:
                </span>{" "}
                Place a non-stick frying pan over medium heat and add butter or
                oil. Cook the omelette: Once the butter is melted and bubbling,
                pour in the eggs.{" "}
              </li>
              <li>
                <span className="text-dark-charcoal font-bold font-outfit">
                  Cook the omelette:
                </span>{" "}
                Once the butter is melted and bubbling, pour in the eggs.{" "}
              </li>
              <li>
                <span className="text-dark-charcoal font-bold font-outfit">
                  Add fillings (optional):
                </span>{" "}
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.{" "}
              </li>
              <li>
                <span className="text-dark-charcoal font-bold font-outfit">
                  Fold and serve:
                </span>{" "}
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </li>
              <li>
                <span className="text-dark-charcoal font-bold font-outfit">
                  Enjoy:
                </span>{" "}
                Serve hot, with additional salt and pepper if needed. Nutrition
                The table below shows nutritional values per serving without the
                additional fillings.
              </li>
            </ol>
          </div>
          <hr className="border-t border-gray-400 mx-10 my-4" />
          <div className="pt-2 pb-4 pl-10 pr-10">
            <h1 className="text-nutmeg font-young-serif font-bold text-3xl mb-6">
              Nutrition
            </h1>
            <p>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <div className="flex">
              <div>
                <p className="text-dark-charcoal font-outfit">Calories</p>
                <p className="text-nutmeg font-bold font-outfit">277kcal</p>
              </div>
              <hr className="border-t border-gray-400 mx-10 my-4" />
              <div>
                <p className="text-dark-charcoal font-outfit">Carbs</p>
                <p className="text-nutmeg font-bold font-outfit">0g</p>
              </div>
              <hr className="border-t border-gray-400 mx-10 my-4" />
              <div>
                <p className="text-dark-charcoal font-outfit">Protein</p>
                <p className="text-nutmeg font-bold font-outfit">20g</p>
              </div>
              <hr className="border-t border-gray-400 mx-10 my-4" />
              <div>
                <p className="text-dark-charcoal font-outfit">Fat</p>
                <p className="text-nutmeg font-bold font-outfit">22g</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
