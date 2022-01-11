const postId = document.querySelector('input[name="post-id"]').value;

async function editFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('input[name="post-title"]').value;
  const post_content = document.querySelector(
    'textarea[name="post-content"]'
  ).value;
  // const post_id = window.location.toString().split("/")[
  //   window.location.toString().split("/").length - 1
  // ];

  await fetch(`/api/post/${postId}`, {
    method: "PUT",
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
const deleteClickHandler = async function () {
  await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });
  document.location.replace("/dashboard");
};

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);

document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteClickHandler);
