import React from "react";

function MealCard(props) {
  console.log(props.mealInfo);

  return (
    <section className="card">
      <h2 className="card__heading">Meal</h2>
      <img className="card__img" alt="meal" src={props.mealInfo.strMealThumb} />
      <h3 className="card__name">{props.mealInfo.strMeal}</h3>
      <h3 className="card__category">{props.mealInfo.strCategory}</h3>
      <h3 className="card__instructions">Instructions</h3>
      <p className="card_paragraph">{props.mealInfo.strInstructions}</p>
    </section>
  );
}

export default MealCard;
