import { RestSerializer } from 'ember-cli-mirage';
import Ember from 'ember';

export default RestSerializer.extend({
  keyForAttribute(attr) {
    return Ember.String.underscore(attr);
  },
  embed: true
});
