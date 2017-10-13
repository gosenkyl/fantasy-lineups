import Ember from 'ember';
import {task} from 'ember-concurrency';

const {Component, computed, get, inject} = Ember;

export default Component.extend({

  classNames: ["register", "forum"],

  store: inject.service(),
  router: inject.service(),

  username: null,
  confirmUsername: null,
  password: null,

  isUsernameSame: computed("username", "confirmUsername", function(){
    return get(this, "username") === get(this, "confirmUsername");
  }),

  isFormComplete: computed.and("username", "confirmUsername", "password", "isUsernameSame"),

  register: task(function * (){
    let user = get(this, "store").createRecord("user", {
      username: get(this, "username"),
      password: get(this, "password")
    });

    try {
      yield user.save();
    } catch(reason){
      console.error(reason);
    }

    get(this, "router").transitionTo("/login");
  }),

  actions: {
    onRegister(){
      get(this, "register").perform();
    }
  }

});
