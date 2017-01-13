import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    players: {embedded: 'always'},
    crimes: {embedded: 'always'}
    // players: { serialize: 'ids' },
    // crimes: { serialize: 'ids' }
  }
});
