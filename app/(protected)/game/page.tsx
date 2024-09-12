import Menu from "@/app/_components/Menu";
import React from "react";

const Game = () => {
  return (
    <>
      <script type="text/javascript" src="/Phaser/phaser.min.js"></script>
      <script type="text/javascript" src="/Scene/SCLoading.js"></script>
      <script type="text/javascript" src="/Scene/SCGameL1.js"></script>
      <script type="text/javascript" src="/Objects/Player.js"></script>
      <script type="text/javascript" src="/Game/Game.js"></script>
      <link rel="stylesheet" href="/Game/style.css" />

      <div className="menu-container"></div>

      <div className="game-container">
        <Menu LinkA={false} />
      </div>
    </>
  );
};

export default Game;
