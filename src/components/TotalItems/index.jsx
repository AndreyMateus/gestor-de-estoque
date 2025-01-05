// Styles
import styles from "./styles.module.css";

// Contexts
import ProductsContext from "../../context/ProductsContext";

// Hooks
import { useContext } from "react";

export default function TotalItems() {
    // TODO: A quantidade total de itens (ex.: 1 mesa e 3 cadeiras devem resultar em 4 itens ao todo).

    const [productsContext] = useContext(ProductsContext);

    const result = productsContext.reduce((ac, productObj) => {
        return ac + (+productObj.quantity);
    }, 0);

    return (
        <div className={styles.container}>
            <h2>QTD Total de Produtos</h2>
            <h3>{result}</h3>
        </div>
    );
}