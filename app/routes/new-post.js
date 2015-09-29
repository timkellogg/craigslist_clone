import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('category');
  },

  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      params.category.save();
      this.transitionTo('index');
    },

    // saveCity(params) {
    //   var categories = this.store.findAll('category');
    //   var newCity = this.store.createRecord('city', params);
    //   debugger;
    //   categories.forEach(function(c) {
    //     params.categories.push(c);
    //   });
    //   newCity.save();
    //   this.transitionTo('index');
    // }
    saveCity(params) {
      var newCity = this.store.createRecord('city', params);
      var categories = this.store.findAll('category');

      // save each category into the city
      categories.forEach(function(c) {
        this.store.findRecord('category', c).then(function(result) {
          debugger;
          newCity.result.save();
        });
      })

      newCity.save();
      this.transitionTo('index');
    }
  }
});
