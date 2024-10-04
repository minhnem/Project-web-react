import { toast } from "react-toastify";
export const INIT_STATE = []

const WishReducer = (state, action) => {
    switch(action.type) {
        case"Add_wish": 
            const checkId = state.some((item)=> item.id === action.product.id )
            if(checkId) {
                toast.error("Sản phẩm đã có trong danh sách yêu thích")
                return state
            } else {
                return [...state, action.product];
            }

        case "Decrease_wish":
            const indexD = state.findIndex((p) => p.id === action.id);
            const newStateD = [...state];
            newStateD[indexD] = {
                ...newStateD[indexD],
                quantity: newStateD[indexD].quantity == 1 ? newStateD[indexD].quantity = 1 : newStateD[indexD].quantity - 1,
            };
            return newStateD;
          
        case "Increase_wish":
            const indexI = state.findIndex((p) => p.id === action.id);
            const newStateI = [...state];
            newStateI[indexI] = {
            ...newStateI[indexI],
            quantity: newStateI[indexI].quantity === 10 ? newStateI[indexI].quantity = 10 : newStateI[indexI].quantity + 1,
            };
            return newStateI;
          
        case "Remove_wish":
            return state.filter(p => p.id !== action.id)
          
        default:
            state;
    }
}

export default WishReducer