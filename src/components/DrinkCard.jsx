import React from "react";

function DrinkCard(props) {
  
  console.log(props.drinkInfo)
  
  return (
    <section className="card">
      <h2 className="card__heading">Meal</h2>
      <img className="card__img" src={props.drinkInfo.strDrinkThumb} />
      <h3 className="card__name">{props.drinkInfo.strDrink}</h3>
      <h3 className="card__category">{props.drinkInfo.strCategory}</h3>
      <h3 className="card__instructions">Instructions</h3>
      <p className="card_paragraph">{props.drinkInfo.strInstructions}</p>
    </section>
  )
}

export default DrinkCard;
