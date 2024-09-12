"use client";
import Link from "next/link";
import React from "react";
interface MenuCardGameProps {
  LinkA?: boolean;
  href: string;
}
const MenuCardGame = ({ href, LinkA = true }: MenuCardGameProps) => {
  if (LinkA) {
    return (
      <Link href={href} className="btn btn-ghost text-xl">
        Card Game
      </Link>
    );
  }
  return (
    <a href={href} className="btn btn-ghost text-xl">
      Card Game
    </a>
  );
};

export default MenuCardGame;
