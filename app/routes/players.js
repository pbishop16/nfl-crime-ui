import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    teamCode: {refreshModel: true}
  },
  model() {
    // if(params.teamCode) {
    //   return this.store.query('player', { lastArrestAssociatedTeam: params.teamCode });
    // } else {
      return this.store.findAll('player');
    // }
  },
  actions: {
    filterByTeam() {
      this.transitionTo({queryParams: {lastArrestAssociatedTeam: this.controller.get('teamCode')}});
      this.controller.set('teamCode', '');
    }
  }
});
