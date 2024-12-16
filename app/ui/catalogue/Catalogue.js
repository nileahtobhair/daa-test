import Image from "next/image";
import Link from "next/link";
import {
  PlusCircleIcon,
  ShoppingCartIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

import styles from "./catalogue.module.css";

export default function Catalogue({
  products,
  cart,
  addToCart,
  removeFromCart,
}) {
  const displayCount = !!cart.length;

  return (
    <>
      <div className={styles.heading}>
        <h1>{"Catalogue"}</h1>

        <Link href={"/cart"} className={styles.cartLink}>
          {displayCount && (
            <div className={styles.cartIndicator}>{cart.length}</div>
          )}
          <ShoppingCartIcon className={styles.cartIcon} />
        </Link>
      </div>
      <div className={styles.itemList}>
        {products.map((item) => {
          const inBasket = cart.some((cartItem) => cartItem.id === item.id);
          const cn = inBasket
            ? `${styles.addedItem} ${styles.item}`
            : styles.item;
          return (
            <div key={item.id} className={cn}>
              <div className={styles.itemContent}>
                <Image
                  aria-hidden
                  src="/camera.jpg"
                  alt="product item"
                  width={185}
                  height={185}
                />
                <div className={styles.itemInfo}>
                  <h4>{item.name}</h4>
                  <p>{`€${item.price}`}</p>
                </div>
              </div>
              {!inBasket ? (
                <button
                  className={styles.addButton}
                  onClick={() => addToCart(item)}
                >
                  Add
                  <PlusCircleIcon className={styles.addIcon} />
                </button>
              ) : (
                <button
                  className={styles.removeButton}
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                  <XCircleIcon className={styles.removeIcon} />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
