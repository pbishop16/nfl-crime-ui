import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sort_on', 'sort_direction', 'page'],
  teamCode: '',
  page: 1,
  sort_on: '',
  sort_direction: '',
  filteredPlayers: Ember.computed('model.@each.lastArrestAssociatedTeam', 'teamCode', function() {
    // let lastArrestAssociatedTeam = this.get('lastArrestAssociatedTeam');
    let players = this.get('model');
    let query = this.get('teamCode');

    if (query) {
      const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
      const regex = new RegExp(regexString, 'ig');

      return players.filterBy('lastArrestAssociatedTeam', teamCode);
    } else {
      return players;
    }
  })
});
