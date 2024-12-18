import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../Firebase/db";
import ItemList from "./ItemList";

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                setItems(products);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };

        fetchProducts();
    }, [id]);

    if (items.length === 0) {
        return (
            <div style={{ textAlign: "center" }}>
                <p>Cargando productos...</p>
            </div>
        );
    }

    return <ItemList items={items} />;
}

export default ItemListContainer;
