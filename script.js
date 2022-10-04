const formEl = document.querySelector("#form");
const statusEl = document.querySelector("#status");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // It stops page refresh
  event.preventDefault();
  console.log(formEl.title);
  console.log(formEl.body);

  // Code below handle AJAX request using FETCH API
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: formEl.title.value,
      body: formEl.body.value,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((respose) => respose.json())
    .then((json) => {
      console.log(json);
      statusEl.classList.add("active");

      // Reseting form value
      formEl.title.value = "";
      formEl.body.value = "";
    })
    .catch((error) => console.log(error));
}
