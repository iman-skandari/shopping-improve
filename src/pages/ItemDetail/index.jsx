import { useEffect, useState } from "react";
import styles from "./itemDetail.module.scss";
import { useParams } from "react-router-dom";
import { getData } from "../../services/apiClient";

const ItemDetail = () => {
  const [product, setProduct] = useState({});

  const params = useParams();
  console.log("params", params);

  useEffect(() => {
    getData(`product/${params.productId}`).then((data) => {
      console.log("data", data);
      setProduct(data);
    });
  }, []);

  return (
    <div className={styles.detailContainer}>
      <div className={styles.productDetail}>
        <div className={styles.imageContainer}>
          <img
            src={product.thumbnail}
            alt="image"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.productInfo}>
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <p>{product.rating}</p>
          <p>{product.description}</p>
          <button>Add To Cart</button>
        </div>
      </div>
      <div className={styles.reviewSection}>comment</div>
    </div>
  );
};

export default ItemDetail;
