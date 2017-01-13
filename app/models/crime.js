import DS from 'ember-data';
import Ember from 'ember';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  // arrestStatsId: attr('number'),
  // date: attr('string'),
  team: attr('string'),
  teamName: attr('string'),
  teamCity: attr('string'),
  name: attr('string'),
  position: attr('string'),
  encounter: attr('string'),
  category: attr('string'),
  description: attr('string'),
  outcome: attr('string'),
  year: attr('string'),
  month: attr('string'),
  day: attr('string'),
  playerId: belongsTo('player', {async: false})
});
