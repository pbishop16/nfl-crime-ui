import ApplicationSerializer from './application';
import DS from 'ember-data';
import Ember from 'ember';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  payloadKeyFromModelName: function(modelName) {
    return Ember.String.underscore(modelName);
  },
  attrs: {
    crimes: { embedded: 'always' }
  }
});
