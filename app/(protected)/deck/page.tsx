"use client";
import Menu from "@/app/_components/Menu";
import React from "react";
import UsuarioCRUD from "@/model/UsuarioCRUD";
import UsuarioContaDeckCRUD from "@/model/UsuarioContaDeck";
import DeckCartaCRUD from "@/model/DeckCartaCRUD";
import DeckCRUD from "@/model/DeckCRUD";
import CartaCRUD from "@/model/CartaCRUD";

import { useState } from "react";

export default function CrudForm() {
  const [operation, setOperation] = useState("create");
  const [Id, setId] = useState("");
  const [Nome, setNome] = useState("");
  const [CartaImg, setCartaImg] = useState("");
  const [ContaId, setContaId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    setLoading(true);

    try {
      const response = await fetch("/api/deckCrud", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          operation,
          Id: Id || null, // Null if no value is provided
          Nome: Nome || null,
          CartaImg: CartaImg || null,
          ContaId: ContaId || null,
        }),
      });

      const data = await response.json();
      if (data.success) {
        console.log(`${operation} operation successful`, data.result);
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Error executing CRUD:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg">
      <div className="mb-4">
        <label className="block mb-2 font-bold">Operation</label>
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="create">Create</option>
          <option value="read">Read</option>
          <option value="update">Update</option>
          <option value="delete">Delete</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Id</label>
        <input
          type="text"
          value={Id}
          onChange={(e) => setId(e.target.value)}
          className="p-2 border rounded w-full"
          placeholder="Enter Deck Id"
          required
        />
      </div>

      {operation !== "delete" && (
        <>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Nome</label>
            <input
              type="text"
              value={Nome}
              onChange={(e) => setNome(e.target.value)}
              className="p-2 border rounded w-full"
              placeholder="Enter Deck Name"
              required={operation !== "read"}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-bold">CartaImg</label>
            <input
              type="text"
              value={CartaImg}
              onChange={(e) => setCartaImg(e.target.value)}
              className="p-2 border rounded w-full"
              placeholder="Enter Card Image URL"
              required={operation !== "read"}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-bold">ContaId</label>
            <input
              type="text"
              value={ContaId}
              onChange={(e) => setContaId(e.target.value)}
              className="p-2 border rounded w-full"
              placeholder="Enter Account Id"
              required={operation !== "read"}
            />
          </div>
        </>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`p-2 w-full text-white rounded ${
          loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {loading
          ? "Loading..."
          : `${operation.charAt(0).toUpperCase() + operation.slice(1)} Deck`}
      </button>
    </form>
  );
}
