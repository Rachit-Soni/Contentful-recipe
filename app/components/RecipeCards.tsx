import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import styles from "./RecipeCards.module.css";

export default function RecipeCards({ recipe }) {
  const { title, slug, image, cookingTime } = recipe.fields;

  return (
    <div className={styles.card}>
      <div className="image-placeholder">
        <Image
          src={"https:" + image.fields.file.url}
          width={300}
          height={300}
          alt="Awesome Dish"
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx. {cookingTime} mins</p>
        </div>
        <div className={styles.actions}>
          <Link href={"/recipes/" + slug}>Cook this</Link>
        </div>
      </div>
    </div>
  );
}
