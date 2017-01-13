import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000',
  namespace: 'api/v1',
  pathForType: function(modelName) {
    var underscored = Ember.String.underscore(modelName);
    return Ember.String.pluralize(underscored);
  },
  shouldReloadAll(store, snapshot) {
    return false;
  }
});
