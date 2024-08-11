const getStorageCart = (name)=>{
    const storageCart = JSON.parse(localStorage.getItem(name));
    return storageCart || [];
}


const saveIdByReadAndWishList= (id,cartName)=>{
    const localStorageCart = getStorageCart(cartName);
    localStorageCart.push(id);
    localStorage.setItem(cartName, JSON.stringify(localStorageCart));
}

export {getStorageCart , saveIdByReadAndWishList};