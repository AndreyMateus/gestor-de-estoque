// Styles
import styles from "./styles.module.css";

// Components
import { Link } from "react-router-dom";

// Hooks
import { useLoaderData } from "react-router-dom";

export default function AboutItem() {
    // TODO: Deve possuir uma página que exibe informações detalhadas de um item, exibindo todas as suas propriedades, bem como botões para atualizar e excluir o item.

    const [productLoad] = useLoaderData();

    return (
        <div className={styles.container}>
            <Link to="/"><button>Voltar</button></Link>
            <p>ID: {productLoad.id}</p>
            <p>Nome: {productLoad.name}</p>
            <p>Descrição: {productLoad.description}</p>
            <p>Categoria: {productLoad.category}</p>
            <p>Preço: R$ {productLoad.price}</p>
            <p>Quantidade: {productLoad.quantity}</p>
            <p>Data: {productLoad.date}</p>
        </div>
    );
}