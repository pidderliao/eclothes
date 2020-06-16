export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';


export function addProduct({ id, productImg, productName, productPrice, productSize, colorName }) {
    return {
        type: ADD_PRODUCT,
        payload: { id, productImg, productName, productPrice, productSize, colorName }
    }
}
export function updateProduct({ id, productImg }) {
    return {
        type: UPDATE_PRODUCT,
        payload: { id, productImg }
    }
}

export function deleteProduct() {
    return {
        type: DELETE_PRODUCT,
        payload: []
    }
}

