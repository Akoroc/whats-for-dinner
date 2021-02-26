import React from "react";

function MealCard(props) {
  
  console.log(props.mealInfo)
  
  return (
    <section className="MealCard">
      <h2>Meal</h2>
      <img />
      <h3>Meal Name</h3>
      <h3>Category</h3>
      <h3>Instructions</h3>
      <p>details</p>
    </section>
  )
}

export default MealCard;
