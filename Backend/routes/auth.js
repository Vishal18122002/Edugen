const express = require("express");
const passport = require("passport");
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"],prompt: 'select_account' }),
  
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("http://localhost:3000/");
  }
);

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"],prompt: 'select_account' })
);

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("http://localhost:3000/");
  }
);

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});




module.exports = router;
