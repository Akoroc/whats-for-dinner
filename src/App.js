import React, { Component } from "react";
// import Header from "./components/Header";
// import DrinkCard from "./components/DrinkCard";
// import MealCard from "./components/MealCard";
// import ShoppingList from "./components/ShoppingList";

import axios from "axios";

// Api Info
const mealApiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
const drinksApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

class App extends Component {
  state = {
    mealDetails: {},
    drinkDetails: {},
    drinkShoppingList: {},
    mealShoppingList: {},
  };

  componentDidMount() {
    this.getMealDetails();
    this.getDrinkDetails();
  }

  getMealDetails = () => {
    axios
      .get(mealApiUrl)
      .then((response) => {
        this.setState({
          mealDetails: response.data.meals[0],
        });
        let mealObj = response.data.meals[0];
        const ingKeys = Object.keys(mealObj).filter((object) => {
          return object.includes("strIngredient");
        });
        const filterObject = (obj, arr) => {
          Object.keys(obj).forEach((key) => {
            if (!arr.includes(key)) {
              delete obj[key];
            }
          });
        };
        function clean(obj) {
          for (var propName in obj) {
            if (
              obj[propName] === null ||
              obj[propName] === undefined ||
              obj[propName] === ""
            ) {
              delete obj[propName];
            }
          }
          return obj;
        }
        filterObject(mealObj, ingKeys);
        clean(mealObj);
        console.log(mealObj);
        this.setState({
          mealShoppingList: mealObj,
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
        let drinkObj = response.data.drinks[0];
        const ingKeys = Object.keys(drinkObj).filter((object) => {
          return object.includes("strIngredient");
        });
        const filterObject = (obj, arr) => {
          Object.keys(obj).forEach((key) => {
            if (!arr.includes(key)) {
              delete obj[key];
            }
          });
        };
        function clean(obj) {
          for (var propName in obj) {
            if (
              obj[propName] === null ||
              obj[propName] === undefined ||
              obj[propName] === ""
            ) {
              delete obj[propName];
            }
          }
          return obj;
        }
        filterObject(drinkObj, ingKeys);
        clean(drinkObj);
        this.setState({
          drinkShoppingList: drinkObj,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        {/* <Header />
        <button>Give me Some Grub</button>
        <div className="screen-divider">
          <DrinkCard mealInfo={this.state.mealDetails} />
          <MealCard drinkInfo={this.state.drinkDetails} />
          <ShoppingList
            drinkShoppingList={this.state.drinkShoppingList}
            mealShoppingList={this.state.mealShoppingList}
          />
        </div> */}
      </div>
    );
  }
}

export default App;
