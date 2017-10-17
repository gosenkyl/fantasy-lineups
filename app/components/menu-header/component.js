import Ember from 'ember';
import {task} from 'ember-concurrency';

const {Component, inject, get, set} = Ember;

export default Component.extend({
  classNames: ["menu-header"],

  session: inject.service(),
  router: inject.service(),
  user: inject.service(),

  init(){
    this._super(...arguments);

    get(this, "setLoggedInUser").perform();
  },

  loggedInUser: null,
  setLoggedInUser: task(function * (){
    let loggedInUser = yield get(this, "user.getLoggedInUser").perform();
    set(this, "loggedInUser", loggedInUser);
  }),

  actions: {
    onLogout(){
      get(this, "session").invalidate().then(() => {
        get(this, "router").transitionTo("/login");
      });
    }
  }
});
