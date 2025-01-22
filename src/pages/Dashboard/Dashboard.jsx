// Styles
import styles from "./styles.module.css";

// Hooks
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

// Components
import TotalDifferentItems from "../../components/TotalDifferentItems";
import TotalItems from "../../components/TotalItems";
import LowStockItems from "../../components/LowStockitems";
import RecentItems from "../../components/RecentItems";
import ListLowStockItems from "../../components/ListLowStockItems";
import AllItemsStock from "../../components/AllItemsStock";
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
        <>
            <ProductsContext.Provider value={[products, setProducts]}>

                <div style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    gap: "10px",
                }}>
                    <div className={styles.container}>
                        <TotalDifferentItems />
                        <TotalItems />
                    </div>
                    <div className={styles.container}>
                        <LowStockItems />
                        <RecentItems />
                    </div>
                </div>

                <div className={styles.container}>
                    <ListLowStockItems />
                </div>

                <div className={styles.container}>
                    <AllItemsStock />
                </div>

                <div>
                    <Link to="/create"><button>Cadastrar Produto</button></Link>
                </div>
            </ProductsContext.Provider>
        </>
    );
}