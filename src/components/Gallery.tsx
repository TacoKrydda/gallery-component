import type { GalleryProps } from "../models/GalleryProps";
import CardItem from "./CardItem";

function Gallery({ items }: GalleryProps) {
  return (
    <section className="grid-container" aria-label="Image Gallery">
      {items.map((item) => (
        <CardItem
          id={item.id}
          src={item.src}
          alt={item.alt}
          title={item.title}
        />
      ))}
    </section>
  );
}

export default Gallery;
