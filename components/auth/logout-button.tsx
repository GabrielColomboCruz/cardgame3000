import Link from "next/link";
import { Button } from "../ui/button";

import { signOut } from "@/auth";
import { redirect } from "next/dist/server/api-utils";

interface LogoutButton {
  href?: string;
  label: string;
}

export const LogoutButton = ({ href = "/", label }: LogoutButton) => {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          try {
            await signOut({ redirectTo: href });
          } catch (error) {
            throw error;
          }
        }}
      >
        <button className="font-normal w-full" type="submit">
          <h1>{label}</h1>
        </button>
      </form>
    </div>
  );
};
