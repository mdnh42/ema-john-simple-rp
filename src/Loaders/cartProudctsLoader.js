import { getShoppingCart } from "../utilities/fakedb";

const cartProudctLoader = async () =>{
    const loadedProudcts = await fetch('products.json'); 
    const products = await loadedProudcts.json();

    // if cart data is in database, you have to use async await 
    const storedCart = getShoppingCart(); 
    const savedCart = [];
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id); 
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct); 
        }
    }
    console.log(products);

    // return [products, savedCart];
    // return {products, savedCart};
    return savedCart;s
}

export default cartProudctLoader;