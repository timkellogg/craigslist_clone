import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  lat: DS.attr(),
  long: DS.attr(),
  categories: DS.hasMany("category", {async: true})
});
