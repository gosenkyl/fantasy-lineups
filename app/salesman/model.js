import DS from 'ember-data';

export default DS.Model.extend({

  user: DS.belongsTo("user"),
  displayName: DS.attr(),
  active: DS.attr()

});
