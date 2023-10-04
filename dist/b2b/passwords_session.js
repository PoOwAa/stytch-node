"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sessions = void 0;
var _shared = require("../shared");
// !!!
// WARNING: This file is autogenerated
// Only modify code within MANUAL() sections
// or your changes may be overwritten later!
// !!!

// Request type for `passwords.sessions.reset`.

// Response type for `passwords.sessions.reset`.

class Sessions {
  constructor(fetchConfig) {
    this.fetchConfig = fetchConfig;
  }

  /**
   * Reset the Member's password using their existing session. The endpoint will error if the session does
   * not contain an authentication factor that has been issued within the last 5 minutes. Either
   * `session_token` or `session_jwt` should be provided.
   * @param data {@link B2BPasswordsSessionResetRequest}
   * @returns {@link B2BPasswordsSessionResetResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  reset(data) {
    return (0, _shared.request)(this.fetchConfig, {
      method: "POST",
      url: `/v1/b2b/passwords/session/reset`,
      data
    });
  }
}
exports.Sessions = Sessions;