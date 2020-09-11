import SHOPPING_DATA from "./shoppingData";

const INITIAL_STATE = {
  itemSets: SHOPPING_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
