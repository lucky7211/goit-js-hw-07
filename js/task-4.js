const form = document.querySelector(".login-form");

function formHandler(event) {
  event.preventDefault();
  const email = event.target.email.value.trim();
  const password = event.target.password.value.trim();
  if (email !== "" && password !== "") {
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
  } else alert("All form fields must be filled in");

  console.log(`email:${email},password:${password}`);
  form.reset();
}

form.addEventListener("submit", formHandler);
