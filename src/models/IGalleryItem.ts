export interface IGalleryItem {
  id: number;
  title: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  date: string;
}

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export const GALLERY_CATEGORIES = ["Natur", "Bryggor", "Vägar", "Föreningen"] as const;
