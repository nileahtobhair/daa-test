"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/lib/cartSlice";

import ItemsInfo from "@/data/items";
import Catalogue from "@/ui/catalogue/Catalogue";

import styles from "./items.module.css";

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
        <Link href={"/cart"} className={styles.cartLink}>
          View Cart
        </Link>
      </main>
    </div>
  );
}
