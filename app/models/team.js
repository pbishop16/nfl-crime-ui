import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  teamCode: attr('string'),
  teamName: attr('string'),
  teamCity: attr('string'),
  crimeCount: attr('number'),
  players: hasMany('player', {async: false})
});
