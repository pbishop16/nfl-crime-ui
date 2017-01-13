import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('players', function() {
    this.route('player', {path: ':player_id'});
  });
  this.route('teams', function() {
    this.route('team', {path: ':team_id'});
  });
  this.route('crimes', function() {
    this.route('crime', {path: ':crime_id'});
  });
  this.route('crime-categories', function() {
    this.route('crime-category', {path: ':crime_category_id'});
  });
  this.route('positions', function() {
    this.route('position', {path: ':position_id'});
  });
});

export default Router;
