import CardGenForm from "@/app/_components/CardGenForm";
import CardImageGenerator from "@/app/_components/CardImageGenerator";
import Menu from "@/app/_components/Menu";
import React from "react";

const CardForm = () => {
  return (
    <div className="bg-stone-700 m-0 p-0">
      <Menu></Menu>
      <CardGenForm></CardGenForm>
    </div>
  );
};

export default CardForm;
