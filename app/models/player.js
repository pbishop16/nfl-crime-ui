import DS from 'ember-data';
import Ember from 'ember';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  lastArrestAssociatedTeam: attr('string'),
  lastArrestAssociatedTeamName: attr('string'),
  lastArrestAssociatedPosition: attr('string'),
  arrestCount: attr('number'),
  crimes: hasMany('crime', {async: false}),
  teams: hasMany('team', {async: false}),
});
