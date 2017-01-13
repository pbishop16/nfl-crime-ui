import Ember from 'ember';

export default Ember.Controller.extend({
  count: Ember.computed('model', function() {
    return this.get('model.crimes.length');
  })
});
