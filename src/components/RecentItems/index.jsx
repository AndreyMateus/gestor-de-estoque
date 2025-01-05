// Styles
import styles from "./styles.module.css";

// Hooks
import { useContext } from "react";

// Contexts
import ProductsContext from "../../context/ProductsContext";

export default function RecentItems() {
    // TODO: Uma lista dos itens adicionados nos últimos 10 dias.

    const productsContext = useContext(ProductsContext);

    const todayDate = new Date();
    // console.log(todayDate);

    const recentAddProdutcs = productsContext.map(product => {



    });

    return (
        <div className={styles.container}>
            <h2>QTD Itens Adicionados Recentemente</h2>
            <p>...</p>
        </div>
    );
}