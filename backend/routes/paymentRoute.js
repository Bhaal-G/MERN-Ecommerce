const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
} = require("../controllers/paymentController");

const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/payment/process").put(isAuthenticatedUser, processPayment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);

module.exports = router;
