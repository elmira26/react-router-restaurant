import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./recipe.css";
import { StateContext } from "./context";

const Recipe = () => {
  const { addOrder } = useContext(StateContext);
  const { id } = useParams();
  useEffect(() => {
    getRecipe(id);
  }, [id]);
  const [data, setData] = useState({
    dishTypes: [],
  });

  const [recipe, setRecipe] = useState([
    {
      steps: [{}],
    },
  ]);

  const getRecipe = async (id) => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?&apiKey=d2cd79e450d14697b5225d90ec63320e`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        includeInstruction: "false",
        id: "",
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setRecipe(result.analyzedInstructions[0].steps);

        setData(result);
        console.log(result);
      });
  };

  const addTodo = () => {
    addOrder(data.title);
  };

  return (
    <div className="recipeContainer">
      <div className="recipeContent">
        <h2 className="recipeTitle">{data.title}</h2>
        <div id={data.id} className="recipeSteps">
          <img
            id={data.id}
            className="recipeImg"
            src={data.image}
            alt="dish img"
          />

          {recipe.map((item) => (
            <span className="spanSteps">{item.step}</span>
          ))}
          <div className="recipe-detail">
            <div className="recipe-detail-div">
              <h4 className="recipeType">Dish type : {data.dishTypes[0]}</h4>
              <h5 className="recipeTime" id={data.id}>
                Total time : {data.readyInMinutes} min
              </h5>
            </div>
            <button className="recipe-btn" onClick={addTodo}>
              add
            </button>
          </div>
        </div>
        <Link className="link" to="/menu" className="closeRecipe">
          x
        </Link>
        <svg className="recipe-pin-icon"></svg>
      </div>
    </div>
  );
};

export default Recipe;
