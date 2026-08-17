import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CliniDoc — Clinical care, connected.";
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
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "#2C3D4F",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -120,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "rgba(107,154,209,0.35)",
            filter: "blur(40px)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            right: -140,
            width: 680,
            height: 680,
            borderRadius: 9999,
            background: "rgba(83,185,178,0.30)",
            filter: "blur(40px)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: "#8CDAD3",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            CLINIDOC
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 72,
              fontWeight: 700,
              color: "#FFFFFF",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Clinical care, connected.
          </div>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              gap: 16,
            }}
          >
            {["Patient", "Clinical Record", "Care Team"].map((label) => (
              <div
                key={label}
                style={{
                  fontSize: 24,
                  color: "#EDF1F4",
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  borderRadius: 999,
                  padding: "10px 24px",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
