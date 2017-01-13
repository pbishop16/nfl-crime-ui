import Ember from 'ember';

export default Ember.Controller.extend({
  crimeCountSort: ['crimeCount:desc'],
  sortedCrimeCount: Ember.computed.sort('model', 'crimeCountSort'),
  mostNotorious: Ember.computed('sortedCrimeCount', function() {
    let categories = this.get('sortedCrimeCount');
    return categories.slice(0,10);
  }),
  cat: '',
  filteredCategories: Ember.computed('model.@each.category', 'cat', function() {

    let crimeCategories = this.get('model');
    let query = this.get('cat');

    if (query) {
      const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
      const regex = new RegExp(regexString, 'ig');

      crimeCategories = crimeCategories.filter((item) => item.get('category').match(regex));
    }

    return crimeCategories;
  }),
});
