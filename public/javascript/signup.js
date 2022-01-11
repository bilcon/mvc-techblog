async function signupFormHandler(event) {
  event.preventDefault();

  const usernameEL = document.querySelector("#username-signup");
  const passwordEL = document.querySelector("#password-signup");

  // if (username && password) {
  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEL.value,
      password: passwordEL.value,
    }),
    header: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("message: failed to signup");
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
