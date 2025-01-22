// Styles
import styles from "./styles.module.css";

// Contexts
import ProductsContext from "../../context/ProductsContext";

// Hooks
import { useContext } from "react";

export default function TotalDifferentItems() {
    // A quantidade total de itens diferentes (ex.: 1 mesa e 3 cadeiras devem resultar em 2 itens ao todo).

    const [productsContext] = useContext(ProductsContext);

    const diversifiedItems = [];

    productsContext.forEach(product => {
        const haveAProduct = diversifiedItems.find(productFilter => {
            return productFilter.name === product.name;
        });

        if (!haveAProduct) {
            diversifiedItems.push(product);
        }
    });

    return (
        <div className={styles.container}>
            <h2>QTD Produtos Diversos</h2>
            <h3>{diversifiedItems.length}</h3>
        </div>
    );
}