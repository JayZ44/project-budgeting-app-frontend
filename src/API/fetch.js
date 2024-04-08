const URL = import.meta.env.VITE_BASE_API_URL;

export async function getAllTransactions() {
  try {
    const response = await fetch(`${URL}/transactions`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
    // Handle the JSON data
  } catch (error) {
    // Handle errors
    console.error("There was a problem with the fetch operation:", error);
  }
}

export async function getOneTransaction(id) {
  try {
    const response = await fetch(`${URL}/transactions/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // console.log(data);
    return data;
    // Handle the JSON data
  } catch (error) {
    // Handle errors
    console.error("There was a problem with the fetch operation:", error);
  }
}
export async function postTransacton(transaction) {
  try {
    const response = await fetch(`${URL}/transactions`, {
      method: "POST",
      body: JSON.stringify(transaction),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // console.log(data);
    return data;
    // Handle the JSON data
  } catch (error) {
    // Handle errors
    console.error("There was a problem with the fetch operation:", error);
  }
}
