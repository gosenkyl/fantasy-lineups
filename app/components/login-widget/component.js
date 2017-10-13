import Ember from 'ember';
import {task} from 'ember-concurrency';

const {Component, computed, inject, get, set} = Ember;

export default Component.extend({
  classNames: ["login", "forum"],

  session: inject.service('session'),
  router: inject.service(),

  username: null,
  password: null,

  isFormComplete: computed.and("username", "password"),

  login: task(function * (){
    let { username, password } = this.getProperties('username', 'password');

    try {
      yield get(this, 'session').authenticate('authenticator:oauth2', username, password);
    } catch(reason) {
      set(this, 'errorMessage', reason.error || reason);
    }

    get(this, "router").transitionTo("subscriptions");
  }),

  actions: {
    onLogin(){
      get(this, "login").perform();
    }
  }

});
