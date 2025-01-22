// Styles
import styles from "./styles.module.css";

// Hooks
import { useContext } from "react";

// Contexts
import ProductsContext from "../../context/ProductsContext";

export default function RecentItems() {
    // Uma lista dos itens adicionados nos últimos 10 dias.

    const productsContext = useContext(ProductsContext);
    //! Convertendo as DATAS que foram salvas como "STRING" para o OBJETO "Date" e assim podermos manipulá-las.
    productsContext[0].forEach(product => {
        product.date = new Date(product.date);
    });

    //! Criando uma DATA LIMITE dos itens recentes, itens que tiverem até 10 DIAS atrás.
    const limitDate = new Date();
    limitDate.setDate(limitDate.getDate() - 10);

    const recentProducts = productsContext[0].filter(product => {
        return product.date >= limitDate;
    });

    return (
        <div className={styles.container}>
            <h2>QTD Itens Adicionados Recentemente</h2>
            <p>{recentProducts.length}</p>
        </div>
    );
}