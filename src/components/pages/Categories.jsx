import { useParams } from "react-router-dom";
import ItemListContainer from "..//items/ItemListContainer";

function Categories() {
    const { categoryId } = useParams();

    return (
        <div>
            <h2>Categoría: {categoryId}</h2>
            <ItemListContainer />
        </div>
    );
}

export default Categories;
