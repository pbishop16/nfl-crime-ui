import DS from 'ember-data';
import Ember from 'ember';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  team: attr('string'),
  teamName: attr('string'),
  teamCity: attr('string'),
  position: attr('string'),
  arrestCount: attr('number'),
  crimes: hasMany('crime'),
  teams: hasMany('team'),
  numberCrimes: Ember.computed('crimes', function(){
    return this.get('crimes.length');
  })
});
