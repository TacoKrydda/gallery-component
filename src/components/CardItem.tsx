import type { CardItemProps } from "../models/CardItemProps";

function CardItem({ id, src, alt, title }: CardItemProps) {
  return (
    <article id={id} className="grid-item" aria-label="Image Card">
      <a href="/">
        <img src={src} alt={alt} />
      </a>
      <div className="overlay-text">
        <h2>{title}</h2>
      </div>
    </article>
  );
}

export default CardItem;
