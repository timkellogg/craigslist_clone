import Ember from 'ember';

export default Ember.Component.extend({
  initialFormShowing: true,

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
        category: this.categoryRecord,
        image: this.get('image'),
        address: this.get('address'),
        zip: this.get('zip')
      };
      this.sendAction('savePost', params);
    },

    nextForm() {
      this.set('initialFormShowing', false);
    }
  }
});
