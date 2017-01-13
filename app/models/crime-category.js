import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  category: attr('string'),
  crimeCount: attr('number'),
  crimes: hasMany('crime')
});
