import { ImageResponse } from "next/og";
import { plotline } from "@/data/case-studies/plotline";
import { site } from "@/data/content";

export const alt = plotline.metaTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const stat = plotline.performance.stats[0];
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
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 4, color: "#1F6F78" }}>
          CASE STUDY
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 16 }}>Plotline</div>
        <div
          style={{
            fontSize: 32,
            marginTop: 16,
            color: "#55615F",
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          AI-powered movie recommendations, built and deployed end to end.
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 30, fontWeight: 700 }}>
          <span style={{ color: "#55615F" }}>{stat.before}</span>
          <span style={{ color: "#1F6F78", margin: "0 14px" }}>→</span>
          <span style={{ color: "#1F6F78" }}>{stat.after}</span>
          <span style={{ color: "#55615F", marginLeft: 14, fontWeight: 400 }}>
            {stat.label}
          </span>
        </div>
        <div style={{ fontSize: 24, marginTop: 40, color: "#55615F" }}>{site.name}</div>
      </div>
    ),
    size,
  );
}
