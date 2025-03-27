import MenuItem from "../../components/MenuItem";
import { categories } from "../../constants/mock";
import styles from "./home.module.scss";
const HomePage = () => {
  return (
    <div className={styles.menuContainer}>
      {categories.map((item) => (
        <MenuItem key={item.id} title={item.title} imageUrl={item.image} />
      ))}
    </div>
  );
};

export default HomePage;
