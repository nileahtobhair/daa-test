"use client";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/lib/cartSlice";

import {
  ArrowLeftIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/outline";

import styles from "./cart.module.css";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <Link href={"/items"} className={styles.catalogueLink}>
            <ArrowLeftIcon className={styles.backIcon} />
            <p className="">{"Back to Catalogue"}</p>
          </Link>
          <h1>{"Your cart"}</h1>
          <div className={styles.empty}>
            Your basket is empty, head back to the catalogue to make a selection
          </div>
          <Link href={"/items"} className="">
            <ArrowLeftIcon className={styles.backIcon} />
            <p className="">{"Back to catalogue"}</p>
          </Link>
        </main>
      </div>
    );
  }

  const totalBasketPrice = cartItems.reduce((amount, product) => {
    return product.price * product.quantity + amount;
  }, 0);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href={"/items"} className={styles.catalogueLink}>
          <ArrowLeftIcon className={styles.backIcon} />
          <p className="">{"Back to Catalogue"}</p>
        </Link>
        <h1>{"Your cart"}</h1>

        {cartItems.map((item) => {
          return (
            <div key={item.id} className={styles.product}>
              <div className={styles.productContent}>
                <Image
                  aria-hidden
                  src="/camera.jpg"
                  alt="product item"
                  width={185}
                  height={185}
                />
                <div className={styles.productInfo}>
                  <h4>{item.name}</h4>
                </div>
              </div>
              <div className={styles.actions}>
                <div>
                  <p>Price {`€${item.price}`}</p>
                  <div className={styles.quantity}>
                    Quantity:
                    <div className={styles.quantityButtons}>
                      <button onClick={() => dispatch(increaseQuantity(item))}>
                        <PlusCircleIcon />
                      </button>
                      <p>{`${item.quantity}`}</p>
                      {item.quantity > 1 && (
                        <button
                          onClick={() => dispatch(decreaseQuantity(item))}
                        >
                          <MinusCircleIcon />
                        </button>
                      )}
                    </div>
                  </div>

                  <p>Total price: {`€${item.price * item.quantity}`}</p>
                </div>
                <button
                  className={styles.removeButton}
                  onClick={() => dispatch(removeFromCart(item))}
                >
                  Remove from cart
                </button>
              </div>
            </div>
          );
        })}
        <div className={styles.price}>{`Total €${totalBasketPrice.toFixed(
          2
        )}`}</div>
      </main>
    </div>
  );
}
