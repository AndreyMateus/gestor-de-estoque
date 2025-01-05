// Styles
import styles from "./styles.module.css";

// Hooks
import { useContext } from "react";

// Contexts
import ProductsContext from "../../context/ProductsContext";

export default function LowStockItems() {
    const [productsContext] = useContext(ProductsContext);
    const productsFiltered = productsContext.filter(productObj => {
        return productObj.quantity <= 10;
    });

    return (
        <div className={styles.container}>
            <h2>QTD Total de Itens com Baixo Estoque</h2>
            <p>{productsFiltered.length}</p>
        </div>
    );
}