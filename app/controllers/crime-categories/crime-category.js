import Ember from 'ember';

export default Ember.Controller.extend({
  count: Ember.computed('model.crimes.isloaded', function() {
    return this.get('model.crimes.length');
  })
});
