import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      openTickets: this.store.query('ticket', {
        orderBy: 'isOpen',
        equalTo: true
      }),

      closedTickets: this.store.query('ticket', {
        orderBy: 'isOpen',
        equalTo: false
      })
    })
  },

  actions: {
    closeTicket(ticket) {
      ticket.set('closedAt', Date.now());
      ticket.set('closedBy', 'teacher');
      ticket.set('isOpen', false);
      ticket.save();
    }
  }
});
