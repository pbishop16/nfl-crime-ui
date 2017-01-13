import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page'],
  code: '',
  page: 1,
  pagesTotal: Ember.computed('model', function() {
    return this.get('model.meta.total_pages');
  }),
  filteredTeams: Ember.computed('model.@each.teamCode', 'code', function() {

    let teams = this.get('model');
    let query = this.get('code');

    if (query) {
      const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
      const regex = new RegExp(regexString, 'ig');

      teams = teams.filter((item) => item.get('teamCode').match(regex));
    }

    return teams;
  }),
  crimeCountSort: ['crimeCount:desc'],
  sortedCrimeCount: Ember.computed.sort('model', 'crimeCountSort'),
  mostNotorious: Ember.computed('sortedCrimeCount', function() {
    let teams = this.get('sortedCrimeCount');
    return teams.slice(0,10);
  })
});
