import React from "react";
import { auth } from "@/auth";
import { LogoutButton } from "@/components/auth/logout-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Menu from "@/app/_components/Menu";
const Settings = async () => {
  const session = await auth();
  return (
    <div>
      <Menu></Menu>
      Settings Page <br />
      {JSON.stringify(session)}
      <br />
      <LogoutButton label="Logout"></LogoutButton>
      <Link href="/dashboard">
        <Button className="w-full" variant="secondary">
          Dashboard
        </Button>
      </Link>
      <a href="/game">
        <Button className="w-full" variant="secondary">
          Game
        </Button>
      </a>
    </div>
  );
};

export default Settings;
