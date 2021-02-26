import React, { Component } from "react";
// import DrinkCard from "./components/DrinkCard";
// import MealCard from "./components/MealCard";
// import ShoppingList from "./components/ShoppingList";

import "./style/main.scss";
import axios from "axios";

// Api Info
const mealApiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
const drinksApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

class App extends Component {
  state = {
    mealDetails: {},
    drinkDetails: {},
  };

  componentDidMount() {
    this.getMealDetails();
    this.getDrinkDetails();
  }

  updateButton = () => {
    this.getMealDetails();
    this.getDrinkDetails();
    console.log(this.state);
  };

  getMealDetails = () => {
    axios
      .get(mealApiUrl)
      .then((response) => {
        const mealDetails = response.data.meals[0];
        this.setState({
          mealDetails: mealDetails,
        });
      })
      .catch((error) => console.log(error));
  };
  getDrinkDetails = () => {
    axios
      .get(drinksApiUrl)
      .then((response) => {
        this.setState({
          drinkDetails: response.data.drinks[0],
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <div className="flexed">
          <h1>Are you Hungry?</h1>
          <button onClick={this.updateButton}>Give me Some Grub</button>
        </div>
        <div className="screen-divider">
          {/* <DrinkCard mealInfo={this.state.mealDetails} />
          <MealCard drinkInfo={this.state.drinkDetails} /> */}
        </div>
      </div>
    );
  }
}

export default App;
