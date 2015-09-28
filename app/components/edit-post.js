import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    deletePost(model) {
      this.sendAction('deletePost', model);
    }
  }

});
