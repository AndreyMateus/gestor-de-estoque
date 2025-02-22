// Styles
import styles from "./styles.module.css";

// Hooks
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

// Components
import TotalDifferentItems from "../../components/TotalDifferentItems/index";
import TotalItems from "../../components/TotalItems/index";
import LowStockItems from "../../components/LowStockItems/index";
import RecentItems from "../../components/RecentItems/index";
import ListLowStockItems from "../../components/ListLowStockItems/index";
import AllItemsStock from "../../components/AllItemsStock/index";
import { Link } from "react-router-dom";

// Contexts
import ProductsContext from "../../context/ProductsContext";

export default function Dashboard() {
    // Toda a navegação na aplicação deve ser feita sem atualizar a página, utilizando client-side navigation.
    // Todos os dados devem ser persistidos no armazenamento local (localStorage) do navegador para serem preservados após atualizar a página ou fechar a janela do app.

    const productsLoaded = useLoaderData();
    const [products, setProducts] = useState(() => {
        if (productsLoaded) {
            return productsLoaded;
        }
        return [];
    });

    return (
        <div className={styles.divContainer}>
            <ProductsContext.Provider value={[products, setProducts]}>

                <div className={styles.container}>
                    <TotalDifferentItems />
                    <TotalItems />
                    <LowStockItems />
                    <RecentItems />
                    <ListLowStockItems />
                </div>

                <Link to="/create" className={styles.containerBtn}><button className={styles.btnAddProduct}>Cadastrar Produto</button></Link>

                <div className={styles.container}>
                    <AllItemsStock />
                </div>

            </ProductsContext.Provider>
        </div>
    );
}