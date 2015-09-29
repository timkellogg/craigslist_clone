import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new-post');
  this.route('post', { path: '/post/:post_id' });
  this.route('search');
  this.route('city', { path: '/city/:city_id' });
});

export default Router;
