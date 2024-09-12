import React from "react";
import MenuBurger from "./MenuBurger";
import MenuCardGame from "./MenuCardGame";
import Link from "next/link";

interface MenuProps {
  LinkA?: boolean;
  href?: string;
}

const Menu = ({ LinkA = true, href = "/" }: MenuProps) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <MenuBurger></MenuBurger>
      </div>
      <div className="flex-1">
        <MenuCardGame href={href} LinkA={LinkA} />
      </div>
      <div className="flex-none">
        <Link href="/login">
          <button className="btn btn-square btn-ghost">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
