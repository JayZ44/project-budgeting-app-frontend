import React from "react";
import { useState, useEffect } from "react";
import { postTransacton } from "../API/fetch";
import { Link, useNavigate } from "react-router-dom";

const NewTransactionForm = () => {
  const navigate = useNavigate();
  const [newTransaction, setNewTransaction] = useState({
    amount: "",
    category: "",
    date: "",
    item_name: "",
    source: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    postTransacton(newTransaction);

    console.log("form submitted :D");
  };

  const handleChange = (event) => {
    setNewTransaction({
      ...newTransaction,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Transaction Name:</label>
        <input
          type="text"
          id="item_name"
          onChange={handleChange}
          value={newTransaction.item_name}
        />

        <label htmlFor="amount">Price:</label>
        <input
          type="numeric"
          id="amount"
          onChange={handleChange}
          value={newTransaction.amount}
        />

        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          onChange={handleChange}
          value={newTransaction.category}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          onChange={handleChange}
          value={newTransaction.date}
        />

        <label htmlFor="source">Source:</label>
        <input
          type="text"
          id="source"
          onChange={handleChange}
          value={newTransaction.source}
        />
        <input
          type="submit"
          onClick={() => {
            navigate("/");
          }}
        />
      </form>
    </div>
  );
};

export default NewTransactionForm;
