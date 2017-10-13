import Ember from 'ember';

const {Route, inject, get} = Ember;

export default Route.extend({

  session: inject.service('session'),

  redirect (model, transition){
    if(get(this, "session.isAuthenticated")){
      this.transitionTo("/subscriptions");
    }
  }

});
