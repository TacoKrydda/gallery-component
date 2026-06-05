import type { GalleryProps } from "../models/itemProps";
import CardItem from "./CardItem";

import styles from "./Gallery.module.css";

export default function Gallery({ items }: GalleryProps) {
  return (
    <section className={styles["grid-container"]} aria-label="Image Gallery">
      {items.map((item) => (
        <CardItem
          key={item.id}
          id={item.id}
          src={item.src}
          alt={item.alt}
          title={item.title}
        />
      ))}
    </section>
  );
}
