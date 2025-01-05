// Styles
import styles from "./styles.module.css";

// Hooks
import { useContext } from "react";

// Contexts
import ProductsContext from "../../context/ProductsContext";
import { Link } from "react-router-dom";

function removeProduct(id, setProductsContext) {
    const products = JSON.parse(localStorage.getItem("products"));
    const productExits = products.find(product => product.id === id);

    if (productExits) {
        const newProducts = products.filter(product => product.id !== id);

        localStorage.setItem("products", JSON.stringify(newProducts));

        setProductsContext(newProducts);
    }
}

export default function AllItemsStock() {
    // TODO: Retornar TODOS OS ITEMS existents em STOCK, cada ITEM deve ter 3 BOTÕES, "VER MAIS DETALHES DO ITEM", "ATUALIZAR", "EXCLUIR".

    const [productsContext, setProductsContext] = useContext(ProductsContext);

    return (
        <div className={styles.container}>
            <h2>Todos os Itens do Stock</h2>
            {productsContext.map(product => {
                return (
                    <div key={product.id} className={styles.itemStock}>
                        <p>{product.name}</p>
                        <div className={styles.containerBtns}>

                            <Link to={`/about/${product.id}`}>
                                <button>Ver mais</button>
                            </Link>

                            <Link to={`/update/${product.id}`}>
                                <button>Editar</button>
                            </Link>

                            <button onClick={() => {
                                removeProduct(product.id, setProductsContext);
                            }}>Remover</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}