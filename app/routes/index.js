import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: "",

  model() {
    return this.store.findAll('post')
  },

  actions: {

  }


});
