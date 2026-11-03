import Image from "next/image";
import { site } from "@/data/content";

// Rounded-card hero photo (4:5 portrait). Widths: beside the greeting on
// phones (120px, 150px from 430px); beside the whole text block from 600px
// (210px, then 300px from 768px). Corners and shadow scale with the size.
export function HeroPhoto() {
  return (
    <div className="w-[120px] min-[430px]:w-[150px] min-[600px]:w-[210px] md:w-[300px]">
      <Image
        src="/photo-portrait.jpg"
        width={640}
        height={800}
        sizes="(min-width: 768px) 300px, (min-width: 600px) 210px, (min-width: 430px) 150px, 120px"
        alt={site.photoAlt}
        priority
        className="aspect-[4/5] h-auto w-full rounded-[14px] object-cover shadow-[0_10px_24px_-10px_var(--shadow)] min-[600px]:rounded-[20px] min-[600px]:shadow-[0_18px_40px_-16px_var(--shadow)] md:rounded-[28px] md:shadow-[0_24px_50px_-18px_var(--shadow)]"
      />
    </div>
  );
}
