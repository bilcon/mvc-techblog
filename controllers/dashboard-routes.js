const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("allPost-admin", { layout: "dashboard", posts });
  } catch (err) {
    console.log(err);
    res.status("login");
  }
});

router.get("/new", withAuth, (req, res) => {
  res.render("newpost", {
    layout: "dashboard",
  });
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    If (postData){
      const post = postData.get({ plain: true });
      res.render("edit-post", {
        layout: "dashboard",
      });

    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});

module.exports = router;
