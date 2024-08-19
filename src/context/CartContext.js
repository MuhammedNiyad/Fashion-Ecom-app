import AsyncStorage from "@react-native-async-storage/async-storage";
import {createContext, useState, useEffect} from "react";

export const CartContext =  createContext()

export const CartProvider = ({children})=>{
    const [ carts, setCarts] = useState([]);

    useEffect(() => {
      loadCartItem();
    }, [])

    const loadCartItem = async ()=>{
        const datas = await AsyncStorage.getItem("carts");
        setCarts(JSON.parse(datas) || []);
    }
    
    const addToCart = async (item)=>{
        const itemExist = carts.findIndex((cart)=> cart.id === item.id);
        if(itemExist === -1){
            const newCartItem = [...carts, item];
            await AsyncStorage.setItem("carts", JSON.stringify(newCartItem));
            setCarts(newCartItem);
        }
    }

    const value = {
        carts,
        addToCart
    };
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}