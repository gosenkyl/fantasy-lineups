import Ember from 'ember';
import fetch from 'fetch';
import {task} from 'ember-concurrency';

const {Service, get, Object:emberObj, inject} = Ember;

export default Service.extend({

  session: inject.service(),

  headers: Ember.computed('session', function() {
    var token = 'Bearer ';
    if (!Ember.isEmpty(this.get('session.data.authenticated.access_token'))) {
      token += this.get('session.data.authenticated.access_token');
    }
    return {
      'Authorization': token
    };
  }),

  authorizedFetch: task(function * (endpoint){
    let result = yield fetch(endpoint, {headers: get(this, "headers")});
    return result.json();
  })

  /*authorizedFetch: task(function * (endpoint){
    let handleAuthorization = function(headerName, headerValue){
      let headers = {};
      headers[headerName] = headerValue;

      return fetch(endpoint, {headers});
    };

    let authorize = get(this, 'session').authorize('authorizer:application', handleAuthorization);
    return authorize.then(result => {
      return result;
    });
  })*/


});
