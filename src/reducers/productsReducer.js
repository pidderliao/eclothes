import PRODUCTS from '../api/products'
import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from "../action/productsActions";



export default function productReducer(state = PRODUCTS, action = {}) {

    switch (action.type) {

        case ADD_PRODUCT:
            return state.concat(action.payload);

        case DELETE_PRODUCT:
            let indexToDel = findProductIndex(state, action.payload.id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel + 1)];

        case UPDATE_PRODUCT:
            let indexToUpdate = findProductIndex(state, action.payload.id);
            const newProductExtend = {
                ...state[indexToUpdate], title: action.payload.title
            };
            return [...state.slice(0, indexToUpdate), newProductExtend, ...state.slice(indexToUpdate + 1)];
        default:
            return state;
    }
    function findProductIndex(products, id) {
        return products.findProductIndex((p) => p.id === id)
    }
    
}