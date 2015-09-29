import Ember from 'ember';

export default Ember.Controller.extend({
  searchPosts: "",

  actions: {
    searchPosts: Ember.on('init', function()  { // on init, track these properties
      var query = this.get('query');
      var searchPosts = this.get('model').filter(function(item) {
        return item.get('title').toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
      this.set('searchPosts', searchPosts);
    })
  }
});
