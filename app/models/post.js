import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  edited: DS.attr(),
  body: DS.attr(),
  time: DS.attr(),
  price: DS.attr()
  category: DS.belongsTo("category", {async: true})
});
