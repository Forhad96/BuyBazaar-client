import { FC } from "react";
import HomeLayout from "./components/layout/HomeLayout";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

const App: FC = () => {
  return (
    <div>
      <CartProvider>
        <WishlistProvider>
          <HomeLayout />
        </WishlistProvider>
      </CartProvider>
    </div>
  );
};

export default App;
