const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.email;
  const password = event.currentTarget.password;

  if (email.value === "" || password.value === "") {
    alert("All the fields of the form are obligatory");
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);

  event.currentTarget.reset();
}
