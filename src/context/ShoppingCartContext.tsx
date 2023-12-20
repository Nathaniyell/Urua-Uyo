import { ReactNode, createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalSstorage } from "../hooks/useLocalStorage";

// Define the type for your shopping cart context
type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContextType = {
  // Define the properties and methods you want in the context
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  openCart: () => void;
  closeCart: () => void;
  cartIsOpen: boolean;
};

type CartItem = {
  id: number;
  quantity: number;
};

// Create a context for the shopping cart with an initial value of undefined
const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(
  undefined
);

// Export a custom hook to use the shopping cart context
export const useShoppingCart = () => {
  // Access the shopping cart context
  const context = useContext(ShoppingCartContext);
  // Throw an error if the hook is not used within a ShoppingCartProvider
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  // Return the context
  return context;
};

// Create a component that provides the shopping cart context to its children
export function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps) {
  // Use a custom hook to get and set cart items in local storage
  const [cartItems, setCartItems] = useLocalSstorage<CartItem[]>(
    "shopping-cart",
    []
  );

  // Use state to track whether the cart is open or closed
  const [cartIsOpen, setCartIsOpen] = useState(false);

  // Calculate the total quantity of items in the cart
  const cartQuantity = cartItems.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  // Function to open the cart
  const openCart = () => setCartIsOpen(true);

  // Function to close the cart
  const closeCart = () => setCartIsOpen(false);

  // Function to get the quantity of a specific item in the cart
  //getItemQuantity function takes an id as an argument, searches for an item with that id in the cartItems array, and returns its quantity. If the item is not found, it returns a default value of 0.
  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  // Function to increase the quantity of a specific item in the cart
  function increaseCartQuantity(id: number) {
    // Use the setCartItems function to update the cartItems state based on the current items
    setCartItems((currItems) => {
      // Check if the item with the given id is not present in the current items
      if (currItems.find((item) => item.id === id) == null) {
        // If not present, create a new array with the current items and add the new item with a quantity of 1
        return [...currItems, { id, quantity: 1 }];
      } else {
        // If the item is already present, map over the current items array
        return currItems.map((item) => {
          // If the item id matches the provided id, update the quantity by incrementing it by 1
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            // If the item id doesn't match, leave the item unchanged
            return item;
          }
        });
      }
    });
  }
  

  // Function to decrease the quantity of a specific item in the cart
  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  // Function to remove a specific item from the cart
  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  // Provide the shopping cart context to its children
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
        cartIsOpen,
      }}
    >
      {children}
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );
}
