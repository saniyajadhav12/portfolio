import { ImageResponse } from "next/og";
import { hero, site } from "@/data/content";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#F8F6F2",
          color: "#1F2A2E",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "#EFE6D5",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 24,
            background: "#1F6F78",
            color: "#F8F6F2",
            fontSize: 44,
            fontWeight: 700,
          }}
        >
          {site.initials}
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 40 }}>
          {site.name}
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: 20,
            color: "#55615F",
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          {hero.tagline}
        </div>
        <div
          style={{
            fontSize: 26,
            marginTop: 36,
            color: "#1F6F78",
            fontWeight: 600,
          }}
        >
          {hero.badge}
        </div>
      </div>
    ),
    size,
  );
}
