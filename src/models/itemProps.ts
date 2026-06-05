export type CardItemProps = {
  id: string;
  src: string;
  alt: string;
  title?: string;
};

export type GalleryProps = {
  items: CardItemProps[];
};
