import AsyncStorage from "@react-native-async-storage/async-storage";
import {createContext, useState, useEffect} from "react";

export const CartContext =  createContext()

export const CartProvider = ({children})=>{
    const [ carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
      loadCartItem();
    }, [])

    const loadCartItem = async ()=>{
        const datas = await AsyncStorage.getItem("carts");
        setCarts(JSON.parse(datas) || []);
        totalSum(carts);
    }
    
    const addToCart = async (item)=>{
        const itemExist = carts.findIndex((cart)=> cart.id === item.id);
        if(itemExist === -1){
            const newCartItem = [...carts, item];
            await AsyncStorage.setItem("carts", JSON.stringify(newCartItem));
            setCarts(newCartItem);
            totalSum(newCartItem);
        }
    }

    const totalSum = (carts)=>{
        const totalSum = carts.reduce((amount, item)=> amount + item.price, 0);
        setTotalPrice(totalSum);
    }

    const deleteCartItem = async (item)=>{
        const newItem = carts.filter((cart)=> cart.id !== item.id);
        setCarts(newItem);
        totalSum(newItem);
        await AsyncStorage.setItem("carts", JSON.stringify(newItem));
    }

    const value = {
        carts,
        addToCart,
        totalPrice,
        deleteCartItem
    };
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}