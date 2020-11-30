import React, { useState, useEffect } from "react";
import "./Styles.css";
import "./menu.css";

import { Link } from "react-router-dom";

function Menu() {
  useEffect(() => {
    getData();
  }, []);

  const [items, setItems] = useState([]);

  const getData = async () => {
    await fetch(
      `https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian,dessert&apiKey=d2cd79e450d14697b5225d90ec63320e`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setItems(res.recipes);
      });
  };

  return (
    <div>
      <h2 className="menuTitle">Special menu</h2>
      <div className="centered menuContainer">
        {items.map((item) => (
          <div key={item.id} className="recipe">
            <figcaption className="menuImage">
              <img
                className="menuImg"
                src={item.image}
                id={item.id}
                type={item.imageType}
                alt="pic"
              />
            </figcaption>
            <div className="recipeDetails">
              <h3 className="recipe_title">{item.title}</h3>
              <h5 className="recipe_type">{item.dishTypes}</h5>
            </div>
            <div className="button_container">
              <button className="menuButton">
                <Link
                  className="linkMore"
                  to={{ pathname: `/menu/${item.id}` }}
                >
                  more
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
