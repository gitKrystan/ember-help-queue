import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      currentTicket: params.ticket_id,
      tickets: this.store.findAll('ticket')
    }
  },
});
