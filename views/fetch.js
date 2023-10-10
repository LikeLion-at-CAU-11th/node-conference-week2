const DELETE_BUTTONS = document.querySelectorAll(".delete-btn");

const baseUrl = "http://localhost:3000";

const deleteTodo = async (idx) => {
  const id = DELETE_BUTTONS[idx].getAttribute("value");
  fetch(`${baseUrl}/todos/${id}`, { method: "DELETE" })
    .then((res) => res.json())
    .then((result) => console.log("deleteTodo:", result))
    .catch((err) => console.log("DELETE FETCH ERROR:", err));
};

DELETE_BUTTONS.forEach((button, idx) => button.addEventListener("click", () => deleteTodo(idx)));
