document.addEventListener("DOMContentLoaded", () => {
  // 삭제 버튼 클릭 이벤트 처리
  const deleteButtons = document.querySelectorAll(".deleteBtn");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const todoId = event.target.getAttribute("data-id");
      deleteTodo(todoId);
    });
  });

  function deleteTodo(todoId) {
    fetch(`/to-dos/${todoId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        location.reload();
      })
      .catch((error) => {
        console.error("삭제 실패", error);
      });
  }
  // 생성 버튼 클릭 이벤트 처리
  const addTodoForm = document.getElementById("addTodoForm");

  addTodoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const content = document.getElementById("content").value;
    const deadLine = document.getElementById("deadLine").value;
    const priority = document.getElementById("priority").value;

    const data = {
      content: content,
      deadLine: deadLine,
      priority: priority,
    };

    fetch("/to-dos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        location.reload();
      })
      .catch((error) => {
        console.error("생성 실패", error);
      });
  });
});
