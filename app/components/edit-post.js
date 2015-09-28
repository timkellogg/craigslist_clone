import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,

  actions: {
    hideEdit() {
      this.set("showEditForm", false);
    },

    showEdit() {
      this.set("showEditForm", true);
    },

    deletePost(model) {
      this.sendAction('deletePost', model);
    },

    editPost(model) {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        price: this.get('price'),
        edited: new Date(),
        image: this.get('image'),
        address: this.get('address'),
        zip: this.get('zip')
      };
      this.sendAction('editPost', model, params);
      this.set("showEditForm", false);
    }
  }

});
