import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('crime-category');
  },
  actions: {
    didTransition() {
      this.controller.set('cat', '');
    }
  }
});
