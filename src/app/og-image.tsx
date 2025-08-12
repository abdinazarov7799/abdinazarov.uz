import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#0b1220",
          color: "#e5e7eb",
          padding: 64,
          fontSize: 54,
          fontWeight: 600,
        }}
      >
        <div style={{ opacity: 0.8, fontSize: 22, marginBottom: 12 }}>Full‑Stack JavaScript Developer</div>
        <div>Diyorbek Abdinazarov</div>
      </div>
    ),
    { ...size }
  );
}


