import Agora from "@appbuilder/react";
import { useEffect } from "react";

const AgoraWrapper = () => {
  useEffect(() => {
    Agora.join("0b544efe-57f4-4727-b275-cefc85102997");
  }, []);
  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex" }}>
      <button
        onClick={() => {
          Agora.join("0b544efe-57f4-4727-b275-cefc85102997");
        }}
      >
        Join
      </button>
      <Agora.View />
    </div>
  );
};

export default AgoraWrapper;
