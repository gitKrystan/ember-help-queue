import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('ticket', {
      orderBy: 'isOpen',
      equalTo: true
    });
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
