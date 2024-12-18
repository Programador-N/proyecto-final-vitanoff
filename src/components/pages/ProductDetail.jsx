import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "..//firebaseConfig";
import ItemDetail from "../components/Items/ItemDetail";

function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const docRef = doc(db, "products", productId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setProduct({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log("El producto no existe");
            }
        };

        fetchProduct();
    }, [productId]);

    return (
        <div>
            {product ? (
                <ItemDetail {...product} />
            ) : (
                <p>Cargando producto...</p>
            )}
        </div>
    );
}

export default ProductDetail;
