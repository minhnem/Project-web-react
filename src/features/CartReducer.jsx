const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      const checkId = state.some(product => product.id === action.product.id)
      if(checkId) {
        alert("sản phẩm đã có trong giỏ hàng")
        return state
      } else {
        return [...state, action.product];
      }
      
    case "Decrease":
      const indexD = state.findIndex((p) => p.id === action.id);
      const newStateD = [...state];
      newStateD[indexD] = {
        ...newStateD[indexD],
        quantity: newStateD[indexD].quantity == 1 ? newStateD[indexD].quantity = 1 : newStateD[indexD].quantity - 1,
      };
      return newStateD;

    case "Increase":
      const indexI = state.findIndex((p) => p.id === action.id);
      const newStateI = [...state];
      newStateI[indexI] = {
        ...newStateI[indexI],
        quantity: newStateI[indexI].quantity === 10 ? newStateI[indexI].quantity = 10 : newStateI[indexI].quantity + 1,
      };
      return newStateI;

    case "Remove":
      return state.filter(p => p.id !== action.id)

    default:
      state;
  }
};

export default CartReducer;
