import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  crimeCount: attr('number'),
  players: hasMany('player', { async: false })
});
