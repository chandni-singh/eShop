// Define application level states and actions to make updates to the state

export const initialState = {
  basket: [],
};

// Selector
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
  }
};

export default reducer;
