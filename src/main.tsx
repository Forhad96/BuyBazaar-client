import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import { WishlistProvider } from "./context/WishlistContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <WishlistProvider>
        <Provider store={store}>
    <CartProvider>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider>
              <RouterProvider router={router} />
            </ThemeProvider>
            <Toaster />
          </PersistGate>
    </CartProvider>
        </Provider>
      </WishlistProvider>
  </React.StrictMode>
);
