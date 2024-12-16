"use client";
import styles from "./items.module.css";

import ItemsInfo from "@/data/items";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/lib/cartSlice";

import Catalogue from "@/ui/catalogue/Catalogue";

export default function Page() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const onAdd = (product) => dispatch(addToCart(product));
  const onRemove = (product) => dispatch(removeFromCart(product));

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Catalogue
          products={ItemsInfo}
          cart={cartItems}
          addToCart={onAdd}
          removeFromCart={onRemove}
        />
      </main>
    </div>
  );
}
