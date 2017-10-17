import Ember from 'ember';
import {task} from 'ember-concurrency';

const {Service, Object:emberObj, inject, get} = Ember;

export default Service.extend({

  fantasyLineups: inject.service("fantasy-lineups"),

  getLoggedInUser: task(function * (){
    let loggedInUser = yield get(this, "fantasyLineups.authorizedFetch").perform("/users/me");



    return emberObj.create(Ember.assign(loggedInUser));
  })

});
