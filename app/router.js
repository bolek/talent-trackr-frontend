import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('profile', { path: '/profiles/:profile_id' });
  this.route('profiles');
});

export default Router;
