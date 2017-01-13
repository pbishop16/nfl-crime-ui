import Ember from 'ember';

export default Ember.Controller.extend({
  arrestCountSort: ['crimeCount:desc'],
  sortedArrestCount: Ember.computed.sort('model', 'arrestCountSort'),
  mostNotorious: Ember.computed('sortedArrestCount', function() {
    let players = this.get('sortedArrestCount');
    return players.slice(0,5);
  })
});
