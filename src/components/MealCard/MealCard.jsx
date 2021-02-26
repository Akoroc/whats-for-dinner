import React from "react";

function MealCard(props) {
  
  console.log(props.mealInfo)
  
  return (
    <section className="MealCard">
      <h2>Meal</h2>
      <img src={props.mealInfo.strMealThumb} />
      <h3>{props.mealInfo.strMeal}</h3>
      <h3>{props.mealInfo.strCategory}</h3>
      <h3>Instructions</h3>
      <p>{props.mealInfo.strInstructions}</p>
    </section>
  )
}

export default MealCard;
