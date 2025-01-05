// Styles
import styles from "./styles.module.css";

// Hooks
import { useContext } from "react";

// Contexts
import ProductsContext from "../../context/ProductsContext";

export default function ListLowStockItems() {
    // TODO: listar os itens que estão com a QUANTIDADE menor que 10, listar em formato de LISTA, passando as PROPRIEDADES dos ITENS.

    const [productsContext] = useContext(ProductsContext);
    const productsFiltered = productsContext.filter(product => {
        return product.quantity <= 10;
    });

    return (
        <div className={styles.container}>
            <h2>Todos os Itens do Stock com QTD MENOR que 10 </h2>
            {productsFiltered.map((product) => {
                return (
                    <div key={product.id} className={styles.itemStock}>
                        <p>Produto: {product.name} / Quantidade: {product.quantity}</p>
                    </div>
                );
            })}
        </div>
    );
}