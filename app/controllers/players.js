import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sort_on', 'sort_direction', 'page'],
  teamCode: '',
  page: 1,
  sort_on: '',
  sort_direction: '',
  // filteredPlayers: Ember.computed('player', 'model', function() {
  //   let team = this.get('teamCode');
  //   let players = this.get('model');
  //
  //   if (teamCode) {
  //     return players.filterBy('team', teamCode);
  //   } else {
  //     return players;
  //   }
  // })
});
