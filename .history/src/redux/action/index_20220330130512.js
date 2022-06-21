// Add item to cart
export const addCart =(product)=>{
    return{
        type :"ADDITEM",
        payload : product
    }
}
// delete item for cart
export const delCart =(product)=>{
    return{
        type :"DELITEM",
        payload : product
    }
}