import Agora from "@appbuilder/react";
import Link from "next/link";
import { useEffect } from "react";

const AgoraWrapper = () => {
  useEffect(() => {
    Agora.join("30af1c5e-7860-484e-929f-5cab550c9d5b");
    window.addEventListener("beforeunload", () => {
      console.log("Unloading")
      return false;
    });
  }, []);
  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex" }}>
      <button
        onClick={() => {
          Agora.join("30af1c5e-7860-484e-929f-5cab550c9d5b");
        }}
      >
        Join
      </button>
      <Link href="https://www.google.com">Join</Link>
      <Agora.View />
    </div>
  );
};

export default AgoraWrapper;
