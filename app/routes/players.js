import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    team: {refreshModel: true}
  },
  model(params) {
    if(params.teamCode) {
      return this.store.query('player', { team: params.teamCode });
    } else {
      return this.store.findAll('player');
    }
  },
  actions: {
    filterByTeam() {
      this.transitionTo({queryParams: {team: this.controller.get('teamCode')}});
      this.controller.set('teamCode', '');
    }
  }
});
