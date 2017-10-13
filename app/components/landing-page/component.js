import Ember from 'ember';

const {Component, get, inject} = Ember;

export default Component.extend({

  classNames: ["home"],

  router: inject.service(),

  actions: {
    onLogin(){
      get(this, "router").transitionTo("home.login");
    },

    onRegister(){
      get(this, "router").transitionTo("home.register");
    }
  }

});
