import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('crime-category', params.crime_category_id);
  }
});
