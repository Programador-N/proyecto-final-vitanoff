import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "items", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setProduct({ id: docSnap.id, ...docSnap.data() });
    };
    fetchProduct();
  }, [id]);

  return product ? (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <img src={product.image} alt={product.name} width="300px" />
    </div>
  ) : (
    <p>Cargando...</p>
  );
};

export default ItemDetailContainer;
