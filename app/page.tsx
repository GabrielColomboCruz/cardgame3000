import Image from "next/image";
import Menu from "./_components/Menu";
import Footer from "./_components/Footer";
import MainMenuImage from "./_components/MainMenuImage";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Menu />
      <MainMenuImage image={"/MainMenuImage.webp"} />
      <Footer />
    </>
  );
}
