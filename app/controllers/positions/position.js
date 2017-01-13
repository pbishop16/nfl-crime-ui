import Ember from 'ember';

export default Ember.Controller.extend({
  playerCount: Ember.computed('model.players.isloaded', function() {
    return this.get('model.players.length');
  })
});
