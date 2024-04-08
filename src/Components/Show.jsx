import React from "react";
import { useParams } from "react-router-dom";
import { getOneTransaction } from "../API/fetch";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Show.css";

const Show = () => {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    amount: "",
    category: "",
    date: "",
    item_name: "",
    source: "",
  });

  useEffect(() => {
    getOneTransaction(id).then((data) => {
      setTransaction(data);
    });
  }, []);
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      Name: {transaction.item_name}
      <br /> Amount: ${transaction.amount}
      <br /> Date: {transaction.date}
      <br /> Category: {transaction.category}
      <br /> Source: {transaction.source}
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Front Page
      </button>
      <button
        onClick={() => {
          navigate("/new");
        }}
      >
        Edit
      </button>
      <button>Delete</button>
    </div>
  );
};

export default Show;
