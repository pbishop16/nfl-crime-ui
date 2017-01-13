import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page'],
  sort_on: '',
  sort_direction: '',
  per_page: null,
  page: 1,
  currentPage: Ember.computed('model', function() {
    return this.get('model.meta.current_page');
  }),
  pagesTotal: Ember.computed('model', function() {
    return Math.round(this.get('model.meta.total_record_count') / this.get('model.meta.records_per_page'));
  }),
  filteredCrimes: Ember.computed('model.@each.teamName', function() {
    // let lastArrestAssociatedTeam = this.get('lastArrestAssociatedTeam');
    let crimes = this.get('model');
    let query = this.get('teamName');

    if (query) {
      const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
      const regex = new RegExp(regexString, 'ig');

      crimes = crimes.filterBy('teamName', query);
    }

    return crimes;
  })
});
