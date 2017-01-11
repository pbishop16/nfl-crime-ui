import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  team: attr('string'),
  teamName: attr('string'),
  teamCity: attr('string'),
  arrestCount: attr('number'),
  players: hasMany('player')
});
