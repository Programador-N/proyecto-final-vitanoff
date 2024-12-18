import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return products;
};
