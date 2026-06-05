import type { CardItemProps } from "../models/itemProps";
import styles from "./CardItem.module.css";

export default function CardItem({ id, src, alt, title }: CardItemProps) {
  return (
    <article id={id} className={styles["grid-item"]} aria-label="Image Card">
      <a href="/">
        <img src={src} alt={alt} />
        <div className={styles["overlay-text"]}>
          <h2>{title}</h2>
        </div>
      </a>
    </article>
  );
}
