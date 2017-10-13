import Ember from 'ember';

const {Component, inject, get} = Ember;

export default Component.extend({
  classNames: ["menu-header"],

  session: inject.service(),
  router: inject.service(),

  actions: {
    onLogout(){
      get(this, "session").invalidate();
      get(this, "router").transitionTo("/login");
    }
  }
});
