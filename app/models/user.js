import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr(),
  displayName: DS.attr(),
  profileImageURL: DS.attr()
});
