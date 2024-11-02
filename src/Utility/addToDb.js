// get readlist books from local storage
const getStoredReadList =()=>{
    const storedListStr =localStorage.getItem('read-list')
    if(storedListStr){
        const storedList =JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

// add the book in local storage 
const addToStoredReadList =(id)=>{
    const storedList =getStoredReadList();
    if(storedList.includes(id)){
    alert('this id already exist')
    console.log(id, 'this id already exist')
    }

    else{
        
        storedList.push(id)
        const storedListStr =JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr)
    }
}


// get the wish list book from local storage
const getStoredWishList =()=>{
    const storedWishStr =localStorage.getItem('wish-list')
    if(storedWishStr){
        const storedWishList =JSON.parse(storedWishStr)
        return storedWishList;

    }
    else{
        return []
    }
}

const addToStoredWishList =(id)=>{
    const wishList =getStoredWishList()

    if(wishList.includes(id)){
    console.log(id, 'this id exist in wishlist')
    alert('this id already exist in wishlist')
    }
    else{
        wishList.push(id)
        const wishListStr =JSON.stringify(wishList)
        localStorage.setItem('wish-list', wishListStr)
    }

}




export {addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList}