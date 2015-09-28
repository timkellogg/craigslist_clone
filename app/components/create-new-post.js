import Ember from 'ember';

export default Ember.Component.extend({
  categoryRecord: "",

  actions: {
    sendToInput(model) {
      var categoryName = model.get('name');
      this.set('categoryRecord', model);
      $("#category").val(categoryName);
    },

    savePost() {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        price: this.get('price'),
        time: new Date(),
        edited: false,
        category: this.categoryRecord
      };
      this.sendAction('savePost', params);
    }
  }
});
