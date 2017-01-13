import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {refreshModel: true}
  },
  model(params) {
      return Ember.RSVP.hash({
        players: this.store.query('player', { page: params.page }),
        topPlayers: this.store.findAll('top-player')
      });
  },
  actions: {
    filterByTeam() {
      this.transitionTo({queryParams: {lastArrestAssociatedTeam: this.controller.get('teamCode')}});
      this.controller.set('teamCode', '');
    },
    previousPage() {
      if (this.controller.get('currentPage') > 1) {
        this.controller.decrementProperty('currentPage');
        this.transitionTo({queryParams: {page: this.controller.get('currentPage')}});
      }
    },
    nextPage() {
      if (this.controller.get('page') !== this.controller.get('pagesTotal')) {
        this.controller.incrementProperty('currentPage');
        this.transitionTo({queryParams: {page: this.controller.get('currentPage')}});
      }
    }
  }
});
