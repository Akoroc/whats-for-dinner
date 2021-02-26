import React, { Component } from "react";
import axios from "axios";

// Api Info
const mealApiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
const drinksApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

class App extends Component {
  state = {
    mealDetails: {},
    drinkDetails: {},
    shoppingList: [],
  };

  componentDidMount() {
    this.getMealDetails();
    this.getDrinkDetails();
    this.getShoppingList();
  }

  getMealDetails = () => {
    axios
      .get(mealApiUrl)
      .then((response) => {
        this.setState({
          mealDetails: response.data.meals[0],
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
        console.log(
          Object.keys(response.data.drinks[0]).filter((object) => {
            return object.includes("strIngredient");
          })
        );
      })
      .catch((error) => console.log(error));
  };

  getShoppingList = () => {
    this.objFilter();
  };

  objFilter = (obj) => {
    // Object.keys(obj);
    // for(const property in obj) {
    //   const regex = /strIngredient/
    //   if
    // }
  };
  render() {
    return (
      <div>
        {/* <Header />
        <button>Give me Some Grub</button>
        <div className="screen-divider">
          <DrinkCard mealInfo={this.state.mealDetails} />
          <MealCard drinkInfo={this.state.drinkDetails} />
          <ShoppingList shoppingList={this.state.shoppingList} />
          
        </div> */}
      </div>
    );
  }
}

export default App;
