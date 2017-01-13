import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'search'],
  teamCode: '',
  search: '',
  page: 1,
  currentPage: Ember.computed('model.players', function() {
    return this.get('model.players.meta.current_page');
  }),
  pagesTotal: Ember.computed('model.players', function() {
    return Math.round(this.get('model.players.meta.total_record_count') / this.get('model.players.meta.records_per_page'));
  }),
  filteredPlayers: Ember.computed('model.players.@each.lastArrestAssociatedTeam', 'teamCode', function() {
    // let lastArrestAssociatedTeam = this.get('lastArrestAssociatedTeam');
    let players = this.get('model.players');
    let query = this.get('teamCode');

    if (query) {
      const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
      const regex = new RegExp(regexString, 'ig');

      players = players.filterBy('lastArrestAssociatedTeam', query);
    }

    return players;
  }),
  arrestCountSort: ['arrestCount:desc'],
  sortedArrestCount: Ember.computed.sort('model', 'arrestCountSort'),
  mostNotorious: Ember.computed('sortedArrestCount', function() {
    let players = this.get('sortedArrestCount');
    return players.slice(0,5);
  })
});
