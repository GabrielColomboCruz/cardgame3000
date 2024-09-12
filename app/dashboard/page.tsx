import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const dashboard = () => {
  return (
    <div>
      Dashboard <br />
      <a href="/game">
        <Button className="w-full" variant="secondary">
          Play
        </Button>
      </a>
    </div>
  );
};

export default dashboard;
