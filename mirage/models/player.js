import { Model } from 'ember-cli-mirage';
import DS from 'ember-data';

const { hasMany } = DS;

export default Model.extend({
  crimes: hasMany()
});
