import Ember from 'ember';
import {task} from 'ember-concurrency';

const {Component, get, set, inject} = Ember;

export default Component.extend({

  classNames: ["my-subscriptions"],

  store: inject.service(),

  init(){
    this._super(...arguments);

    //get(this, "getData").perform();
  },

  getData: task(function * (){
    let users = get(this, "store").findAll("user");
    set(this, "users", users);
  })

});
