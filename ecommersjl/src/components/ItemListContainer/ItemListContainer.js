import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const collectionRef = collection(db, "products");
    const q = categoryId ? query(collectionRef, where("category", "==", categoryId)) : collectionRef;

    getDocs(q)
      .then((response) => {
        setProducts(
          response.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      })
      .catch((error) => {
        console.error("Error fetching documents: ", error);
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <section>
        <ItemList products={products} />
      </section>
    </div>
  );
};

export default ItemListContainer;