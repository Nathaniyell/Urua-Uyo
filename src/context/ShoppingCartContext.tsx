import { ReactNode, createContext, useContext, useState } from 'react';

// Define the type for your shopping cart context
type ShoppingCartProviderProps = {
  children: ReactNode;
};
type ShoppingCartContextType = {
  // Define the properties and methods you want in the context
getItemQuantity:(id:number)=> number
increaseCartQuantity:(id:number)=> void
decreaseCartQuantity:(id:number)=> void
removeFromCart:(id:number)=> number
};
type CartItem ={
  id: number
  quantity: number
}

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};


export function ShoppingCartProvider({ children }: ShoppingCartProviderProps){
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function getQuantity(id:number){
    cartItems.find(item=>item.id===id)?.quantity||0 
  }
  function increaseCartQuantity(id:number){
   setCartItems(currItems=>{
    if(currItems.find(item=>item.id===id) == null){
      return[...currItems, {id, quantity:1}]
    }else{
      return currItems.map(item=>{
        if(item.id===id){
          return{...item, quantity: item.quantity +1}
        }else{
          return item
        }

      })
    }
   })
  }
  function decreaseCartQuantity(id:number){
   setCartItems(currItems=>{
    if(currItems.find(item=>item.id===id)?.quantity ===1){
      return currItems.filter(item=>item.id!==id)
    }else{
      return currItems.map(item=>{
        if(item.id===id){
          return{...item, quantity: item.quantity -1}
        }else{
          return item
        }

      })
    }
   })
  }

  

  return (
    <ShoppingCartContext.Provider value={{ getQuantity,increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
