import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('ticket');
  },

  actions: {
    closeTicket(ticket) {
      ticket.destroyRecord();
    }
  }
});
