export default function loadProduct({ params }) {
    const products = JSON.parse(localStorage.getItem("products"));
    const product = products.filter(product => product.id === +params.productId);
    return product;
}