import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {refreshModel: true}
  },
  model(params) {
    // if(params.teamCode) {
    //   return this.store.query('player', { lastArrestAssociatedTeam: params.teamCode });
    // } else {
      return this.store.query('team', {
        page: params.page
      });
    // }
  },

  actions: {
    didTransition() {
      this.controller.set('code', '');
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
