// Styles
import styles from "./styles.module.css";

// Hooks
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function handleForm(e, name, quantity, price, category, description) {
    e.preventDefault();

    const newProduct = {
        //! GERANDO ID ALETAÓRIO.
        id: Math.floor(Math.random() * 10000),
        date: new Date(),
        name,
        quantity: +quantity,
        price: +price,
        category,
        description,
    };

    const products = JSON.parse(localStorage.getItem("products")) || [];
    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
}

export default function CreateItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.containerBtn}>
                <Link to="/"><button className={styles.btnBack}>Voltar</button></Link>
            </div>

            <form
                onSubmit={(e) => {
                    handleForm(e, name, quantity, price, category, description);
                    navigate("/");
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

                <div className={styles.containerBtn}>
                    <button type="submit" className={styles.btnBack}>Salvar</button>
                </div>
            </form>
        </>
    );
}