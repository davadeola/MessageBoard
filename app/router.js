import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('write-question');
  this.route('answer' ,{path :'/answer/:message_id'});
  this.route('update', {path :'/update/:message_id'});
});

export default Router;
