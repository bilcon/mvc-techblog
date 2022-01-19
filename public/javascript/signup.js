async function signupFormHandler(event) {
  event.preventDefault();

  const usernameEL = document.querySelector("#username-input-signup");
  const passwordEL = document.querySelector("#password-input-signup");

  fetch("/api/user", {
    method: "post",
    body: JSON.stringify({
      username: usernameEL.value,
      password: passwordEL.value,
    }),
    header: {
      "Content-Type": "application/json",
    },
  })
    .then(function () {
      document.location.replace("/dashboard");
    })
    .catch((err) => console.log(err));
}

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
