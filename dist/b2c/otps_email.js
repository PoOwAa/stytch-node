"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Email = void 0;

var _shared = require("../shared");

// !!!
// WARNING: This file is autogenerated
// Only modify code within MANUAL() sections
// or your changes may be overwritten later!
// !!!
class Email {
  constructor(fetchConfig) {
    this.fetchConfig = fetchConfig;
  }
  /**
   * Send a One-Time Passcode (OTP) to a User using their email. If you'd like to create a user and send them
   * a passcode with one request, use our
   * [log in or create endpoint](https://stytch.com/docs/api/log-in-or-create-user-by-email-otp).
   *
   * ### Add an email to an existing user
   * This endpoint also allows you to add a new email to an existing Stytch User. Including a `user_id`,
   * `session_token`, or `session_jwt` in the request will add the email to the pre-existing Stytch User upon
   * successful authentication.
   *
   * Adding a new email to an existing Stytch User requires the User to be present and validate the email via
   * OTP. This requirement is in place to prevent account takeover attacks.
   *
   * ### Next steps
   * Collect the OTP which was delivered to the user. Call
   * [Authenticate OTP](https://stytch.com/docs/api/authenticate-otp) using the OTP `code` along with the
   * `phone_id` found in the response as the `method_id`.
   * @param data {@link OTPsEmailSendRequest}
   * @returns {@link OTPsEmailSendResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */


  send(data) {
    return (0, _shared.request)(this.fetchConfig, {
      method: "POST",
      url: `/v1/otps/email/send`,
      data
    });
  }
  /**
   * Send a one-time passcode (OTP) to a User using their email. If the email is not associated with a User
   * already, a User will be created.
   *
   * ### Next steps
   *
   * Collect the OTP which was delivered to the User. Call
   * [Authenticate OTP](https://stytch.com/docs/api/authenticate-otp) using the OTP `code` along with the
   * `phone_id` found in the response as the `method_id`.
   * @param data {@link OTPsEmailLoginOrCreateRequest}
   * @returns {@link OTPsEmailLoginOrCreateResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */


  loginOrCreate(data) {
    return (0, _shared.request)(this.fetchConfig, {
      method: "POST",
      url: `/v1/otps/email/login_or_create`,
      data
    });
  }

}

exports.Email = Email;