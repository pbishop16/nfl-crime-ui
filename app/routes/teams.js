import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    if(params) {
      return this.store.query('team', { team: params.teamCode });
    } else {
      return this.store.findAll('team');
    }

  }
});
