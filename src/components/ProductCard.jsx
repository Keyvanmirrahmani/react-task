import styles from "./ProductCard.module.css";
import { useState, useEffect } from "react";

const ProductCard = ({ name, price, image }) => {
    const [isAdded, setIsAdded] = useState(false);
    useEffect(() => {
        console.log("ProductCard rendered for the first time!");
    }, []);
    return (
        <div className={styles.card}>
            <img src={image} alt={name}
                className={styles.image} />
            <h2>{name}</h2>
            <p className={styles.price}>{price}</p>

            {!isAdded ? (
                <button
                    className={styles.button}
                    onClick={() => setIsAdded(true)}>
                    افزودن به سبد خرید
                </button>
            ) : (
                <button className={`${styles.button} ${styles.added}`}>
                    اضافه شد
                </button>
            )}
        </div>
    );
}

export default ProductCard;