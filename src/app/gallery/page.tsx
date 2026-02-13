// Fetch
import { getGallery } from "@/data/gallery";
// Functions
import { formatDate } from "@/utils/dateUtils";
// Interfaces
import type { IGalleryItem } from "@/models/IGalleryItem";
// React/Next
import Image from "next/image";
// Components
import PageShell from "@/components/layout/page-shell";

// Page
export default async function GalleryPage() {
  const galleryItems: IGalleryItem[] = await getGallery();

  return (
    <>
      <PageShell title="Bilder och video" showHero={true}>
        <section aria-label="Bildgalleri">
          <ul className="gallery-grid" role="list">
            {galleryItems.map(({ id, title, src, alt, category, date }) => (
              <li className="card" key={id + date}>
                <figure>
                  <div className="gallery-image-container">
                    <Image className="gallery-image" src={src} alt={alt} height={300} width={400} />
                  </div>

                  <figcaption className="card-caption">
                    <div className="caption-title">
                      <span>{title}</span>
                      <span className="caption-meta">{category}</span>
                    </div>
                    <time className="caption-meta" dateTime={formatDate(date)}>
                      {date}
                    </time>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      </PageShell>
    </>
  );
}
