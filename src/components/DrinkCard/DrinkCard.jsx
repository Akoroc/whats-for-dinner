import React from "react";

function MealCard(props) {
  console.log(props.drinkInfo);

  return (
    <section className="MealCard">
      <h2>Drinks</h2>
      <img src={props.drinkInfo.strDrinkThumb} alt="Meal" />
      <h3>{props.drinkInfo.strDrink}</h3>
      <h3>{props.drinkInfo.strCategory}</h3>
      <h3>Instructions</h3>
      <p>{props.drinkInfo.strInstructions}</p>
    </section>
  );
}

export default MealCard;
