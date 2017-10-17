import Ember from 'ember';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({

  serverTokenEndpoint: '/oauth/token',
  serverTokenRevocationEndpoint: '/users/revoketoken',

  makeRequest: function(url, data) {
    return Ember.$.ajax({
      url:         url,
      type:        'POST',
      data:        data,
      dataType:    'json',
      contentType: 'application/x-www-form-urlencoded',
      headers: {
        "Authorization": "Basic ZmFudGFzeWxpbmV1cHM6bXN1c3BhcnRhbnMyNA=="
      }
    });
  }

});
