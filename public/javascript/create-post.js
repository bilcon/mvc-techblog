async function createPostHandler(event) {
  event.preventDefault();
  const title = document.querySelector('input[name="post-title"]').value;
  const post_content = document.querySelector(
    'textarea[name="post-content"]'
  ).value;
  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  document.location.replace("/dashboard");
}

document
  .querySelector("#create-new-post")
  .addEventListener("click", createPostHandler);
