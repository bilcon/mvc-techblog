async function commentFormHandler(event) {
  event.preventDefault();
  const postId = document.querySelector('input[name="post-id"]').value;
  const comment_text = document.querySelector(
    'textarea[name="comment-body"]'
  ).value;

  // const post_id = window.location.toString().split("/")[
  //   window.location.toString().split("/").length - 1
  // ];

  if (comment_text) {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        postId,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.reload();
  }
}

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
