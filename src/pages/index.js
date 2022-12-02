import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

const AgoraWrapper = dynamic(() => import("../components/AgoraWrapper"), {
  ssr: false,
});

export default function Home() {
  return <AgoraWrapper />;
}
