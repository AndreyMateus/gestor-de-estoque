// Styles
import styles from "./styles.module.css";

// Hooks
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function handleForm(e, productLoad, name, quantity, price, category, description) {
    e.preventDefault();

    const products = JSON.parse(localStorage.getItem("products"));

    const productsFiltered = products.filter(productFilter => productFilter.id !== productLoad.id);


    const newProduct = {
        id: productLoad.id,
        name,
        quantity,
        price,
        category,
        description,
    };

    localStorage.setItem("products", JSON.stringify([...productsFiltered, newProduct]));
}

export default function UpdateItem() {
    // TODO: Também deve possuir uma tela de atualizar os dados de um item. Ela pode ter o mesmo formato da tela de criação de novos itens.

    const [productLoad] = useLoaderData();

    const [name, setName] = useState(productLoad.name);
    const [quantity, setQuantity] = useState(productLoad.quantity);
    const [price, setPrice] = useState(productLoad.price);
    const [category, setCategory] = useState(productLoad.category);
    const [description, setDescription] = useState(productLoad.description);

    return (
        <>
            <>
                <div className={styles.containerBtn}>
                    <Link to="/"><button className={styles.btnBack}>Voltar</button></Link>
                </div>

                <form
                    onSubmit={(e) => {
                        handleForm(e, productLoad, name, quantity, price, category, description);
                    }}
                    className={styles.form}>

                    <h1>Cadastrar Produto</h1>

                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text"
                            id="name"
                            name="name"
                            required
                            value={name}
                            onChange={(e) => {
                                setName(e.currentTarget.value);
                            }} />
                    </div>

                    <div>
                        <label htmlFor="quantity">Quantidade</label>
                        <input type="number"
                            id="quantity"
                            name="quantity"
                            required
                            value={quantity}
                            onChange={(e) => {
                                setQuantity(e.currentTarget.value);
                            }} />
                    </div>

                    <div>
                        <label htmlFor="price">Preço</label>
                        <input type="number"
                            id="price"
                            name="price"
                            required
                            value={price}
                            onChange={(e) => {
                                setPrice(e.currentTarget.value);
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="category">Categoria</label>
                        <select name="category" id="category"
                            value={category}
                            onChange={(e) => {
                                setCategory(e.currentTarget.value);
                            }}
                        >
                            <option value="">Selecione</option>
                            <option value="electronic" >Eletrônico</option>
                            <option value="consumable">Consumível</option>
                            <option value="clothing">Roupa</option>
                            <option value="others">Outros</option>
                        </select>
                    </div>

                    <div className={styles.description}>
                        <label htmlFor="description">Descrição</label>
                        <textarea
                            name="description"
                            id="description"
                            rows="5"
                            cols="80"
                            className={styles.textArea}
                            value={description}
                            onChange={(e) => {
                                setDescription(e.currentTarget.value);
                            }}
                            placeholder="Digite uma descrição para o produto"
                        ></textarea>
                    </div>

                    <button type="submit">Salvar</button>
                </form>
            </>
        </>
    );
}