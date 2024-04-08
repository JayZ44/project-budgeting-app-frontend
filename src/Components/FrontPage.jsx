// import { getAllTransactions } from "../API/fetch";
// import React from "react";

// const FrontPage = () => {
//   let allTransactions;
//   getAllTransactions()
//     .then((result) => {
//       allTransactions = result.map(
//         (transaction) => `${Object.values(transaction)}`
//       );
//       return allTransactions;
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
//   return (
//     <div>a
//       FrontPage
//       <div>{allTransactions}</div>
//     </div>
//   );
// };
// export default FrontPage;

import { Link, useNavigate } from "react-router-dom";

import { getAllTransactions } from "../API/fetch";

import React, { useState, useEffect } from "react";

const FrontPage = () => {
  const navigate = useNavigate();
  const [allTransactions, setAllTransactions] = useState(null);

  useEffect(() => {
    getAllTransactions()
      .then((result) => {
        // const transactions = result.map((transaction) =>
        //   Object.values(transaction)
        // );
        setAllTransactions(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div>FrontPage</div>
      <button
        onClick={() => {
          navigate("/new");
        }}
      >
        New Transaction
      </button>
      <div>
        {allTransactions ? (
          allTransactions.map((transaction) => (
            <Link key={transaction.id} to={`/${transaction.id}`}>
              <div>
                {" "}
                This is a transaction! {transaction.item_name}, $
                {transaction.amount}{" "}
              </div>
            </Link>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default FrontPage;
