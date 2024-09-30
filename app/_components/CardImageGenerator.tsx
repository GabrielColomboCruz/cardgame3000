import { useEffect, useRef } from "react";

type CardImageGeneratorProps = {
  id: string;
  name: string;
  attack: string;
  life: string;
  rarity: number;
  hexHighlightColor: string;
  hexBackgroundColor: string;
  value1: string; // Description
  image?: string; // Base64 or URL of the image
};

const CardImageGenerator: React.FC<CardImageGeneratorProps> = ({
  id,
  name,
  attack,
  life,
  rarity,
  hexHighlightColor,
  hexBackgroundColor,
  value1,
  image,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Set the main background with rounded corners
        drawRoundedRect(
          ctx,
          0,
          0,
          canvas.width,
          canvas.height,
          0,
          hexBackgroundColor || "#FF0000"
        );

        // Draw the top section (name, id) with rounded corners
        drawRoundedRect(
          ctx,
          10,
          10,
          canvas.width - 20,
          80,
          10,
          hexHighlightColor || "#0000FF"
        );
        ctx.fillStyle = "#000";
        ctx.font = "20px Arial";
        ctx.fillText(`${name}`, 20, 40);
        ctx.fillText(`${id}`, canvas.width - 80, 40);

        // Draw the middle "IMG" section with rounded corners
        drawRoundedRect(
          ctx,
          10,
          100,
          canvas.width - 20,
          250,
          10,
          hexHighlightColor || "#0000FF"
        );
        if (image) {
          const img = new Image();
          img.src = image;
          img.onload = () => {
            const imgX = 20;
            const imgY = 110;
            const imgWidth = canvas.width - 40;
            const imgHeight = 230;
            ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
          };
        } else {
          ctx.fillStyle = "#000";
          ctx.font = "30px Arial";
          ctx.fillText("IMG", canvas.width / 2 - 40, 230);
        }

        // Draw the bottom section (description, attack, life) with rounded corners
        drawRoundedRect(
          ctx,
          10,
          360,
          canvas.width - 20,
          230,
          10,
          hexHighlightColor || "#0000FF"
        );
        ctx.fillStyle = "#000";
        ctx.font = "18px Arial";
        ctx.fillText(`${value1}`, 20, 390);
        ctx.fillText(`ATK: ${attack}`, 20, canvas.height - 30);
        ctx.fillText(`LIFE: ${life}`, canvas.width - 100, canvas.height - 30);
      }
    }
  }, [
    id,
    name,
    attack,
    life,
    rarity,
    hexHighlightColor,
    hexBackgroundColor,
    value1,
    image,
  ]);

  const drawRoundedRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    fillColor: string
  ) => {
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
  };

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={600}
      className="border"
    ></canvas>
  );
};

export default CardImageGenerator;
