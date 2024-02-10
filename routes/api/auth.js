const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/auth");
const { validateBody, authenticate, upload } = require("../../midlewares");
const { schemas } = require("../../models/user");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.get("/users/verify/:verificationToken", ctrl.verifyEmail);
router.post(
  "/users/verify",
  validateBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);
router.patch(
  "/update-subscription",
  authenticate,
  validateBody(schemas.subscriptionSchema),
  ctrl.updateSubscription
);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
