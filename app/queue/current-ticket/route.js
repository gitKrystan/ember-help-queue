import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var currentTicket = params.ticket_id;
    var tickets = this.store.findAll('ticket');
    return {
      currentTicket: currentTicket,
      tickets: tickets
    };
  },

  actions: {
    closeTicket(currentTicket) {
      console.log("In the route, current: " + currentTicket);
      this.store.findRecord('ticket', currentTicket).then(function(ticket) {
        ticket.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
