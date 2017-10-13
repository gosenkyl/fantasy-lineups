//import Ember from 'ember';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: '/oauth/token',
  //serverTokenRevocationEndpoint: '/oauth/revoketoken',

  /**
   * Override to append password header
   *
   * @param identification
   * @param password
   * @param scope
   * @param headers
     */
  authenticate(identification, password, scope = [], headers = {}) {

    // Is this the right way to do this?
    headers["Authorization"] = "Basic ZmFudGFzeWxpbmV1cHM6bXN1c3BhcnRhbnMyNA==";

    return this._super(identification, password, scope, headers);
  }

  /*makeRequest: function(url, data) {
    return Ember.$.ajax({
      url:         url,
      type:        'POST',
      data:        data,
      dataType:    'json',
      contentType: 'application/x-www-form-urlencoded',
      headers: {
        "Authorization": "Basic ZmFudGFzeS1saW5ldXBzOjE1ZDhmYzYyLWY3OGItNDM1My04Y2YzLTIyNGNmMTcxMjkwNAo="
      }
    });
  }*/

});
