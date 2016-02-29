import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('teacher');
  this.route('queue');
  this.route('queue', function() {
    this.route('current-ticket', {path: '/:ticket_id'});
    this.route('full-queue', {path: '/'});
  });
});

export default Router;
