import DS from 'ember-data';

export default DS.Model.extend({

  user: DS.belongsTo("user"),
  salesman: DS.belongsTo("salesman"),
  active: DS.attr()

});
