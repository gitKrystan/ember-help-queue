import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var currentTicket = params.ticket_id;
    var tickets = this.store.query('ticket', {
      orderBy: 'isOpen',
      equalTo: true
    });
    return {
      currentTicket: currentTicket,
      tickets: tickets
    };
  },

  actions: {
    closeTicket(ticket) {
      ticket.set('closedAt', Date.now());
      ticket.set('closedBy', 'student');
      ticket.set('isOpen', false);
      ticket.save();
      this.transitionTo('index');
    }
  }
});
