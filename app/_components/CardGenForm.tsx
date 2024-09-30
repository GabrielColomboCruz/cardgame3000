"use client";
import { useState } from "react";
import CardImageGenerator from "./CardImageGenerator";

type FormData = {
  id: string;
  name: string;
  attack: string;
  life: string;
  rarity: number;
  image: string;
  hexNameIdBackground: string;
  hexImgBackground: string;
  hexValue1Background: string;
  shine?: string;
  value1: string;
  value2?: string;
  value3?: string;
};

const CardForm = () => {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    name: "",
    attack: "",
    life: "",
    rarity: 1,
    image: "",
    hexNameIdBackground: "#ffffff", // Hex color for the top section
    hexImgBackground: "#dddddd", // Hex color for IMG section
    hexValue1Background: "#ffffff", // Hex color for bottom section
    value1: "", // Description field
    value2: "",
    value3: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Handle Image");
    const file = e.target.files?.[0];
    if (file) {
      console.log("If File Image");
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result as string, // Store the base64 string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex">
      {/* Form */}
      <div className="w-1/3 p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-md p-4"
        >
          {/* Input for card details */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="id" className="block text-gray-700">
              ID:
            </label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="attack" className="block text-gray-700">
              Attack:
            </label>
            <input
              type="text"
              id="attack"
              name="attack"
              value={formData.attack}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="life" className="block text-gray-700">
              Life:
            </label>
            <input
              type="text"
              id="life"
              name="life"
              value={formData.life}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700">
              Upload Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange} // We'll define this function
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          {/* Input for hex colors */}
          <div className="mb-4">
            <label
              htmlFor="hexNameIdBackground"
              className="block text-gray-700"
            >
              Name/ID Background Hex:
            </label>
            <input
              type="text"
              id="hexNameIdBackground"
              name="hexNameIdBackground"
              value={formData.hexNameIdBackground}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="hexImgBackground" className="block text-gray-700">
              IMG Background Hex:
            </label>
            <input
              type="text"
              id="hexImgBackground"
              name="hexImgBackground"
              value={formData.hexImgBackground}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="hexValue1Background"
              className="block text-gray-700"
            >
              Value1/Attack/Life Background Hex:
            </label>
            <input
              type="text"
              id="hexValue1Background"
              name="hexValue1Background"
              value={formData.hexValue1Background}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="value1" className="block text-gray-700">
              Description (Value1):
            </label>
            <input
              type="text"
              id="value1"
              name="value1"
              value={formData.value1}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-orange-500 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Display the generated card */}
      <div className="w-2/3 p-6 flex items-center justify-center">
        <CardImageGenerator
          id={formData.id}
          name={formData.name}
          attack={formData.attack}
          life={formData.life}
          rarity={formData.rarity}
          hexBackgroundColor={formData.hexNameIdBackground}
          hexHighlightColor={formData.hexImgBackground}
          value1={formData.value1}
          image={formData.image}
        />
      </div>
    </div>
  );
};

export default CardForm;
