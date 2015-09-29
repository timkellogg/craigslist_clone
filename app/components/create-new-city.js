import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveCity() {
      // var categories = [],

      var params = {
        name: this.get('name'),
        categories: []
      };
      this.sendAction('saveCity', params);
    },

    doShit() {
      console.log("it works");
    }
  }
});
