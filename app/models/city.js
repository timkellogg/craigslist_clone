import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  categories: DS.hasMany("category", {async: true}),
  posts: DS.hasMany("post", {async: true})
});
