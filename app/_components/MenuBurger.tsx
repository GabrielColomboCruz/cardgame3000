"use client";
import Link from "next/link";
import React from "react";

interface MenuCardGameProps {
  LinkA?: boolean;
}

const MenuBurger = ({ LinkA = true }: MenuCardGameProps) => {
  if (!LinkA) {
    return (
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a href={"/dashboard"}>Dashboard</a>
          </li>
          <li>
            <a href={"/game"}>Game</a>
          </li>
          <li>
            <a href={"/dashboard"}>Dashboard</a>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <a href={"/game"}>Game</a>
        </li>
        <li>
          <Link href={"/card"}>CardBuilder</Link>
        </li>
        <li>
          <Link href={"/deck"}>Decks</Link>
        </li>
        <li>
          <Link href={"/deckbuilder"}>CreateDeck</Link>
        </li>
        <li>
          <Link href={"/dashboard/users"}>UsersPage?</Link>
        </li>
        <li>
          <Link href={"/dashboard/settings"}>??</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBurger;
