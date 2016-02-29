import Ember from 'ember';

export default Ember.Component.extend({

  sortProperties: ['openedAt'],
  sortedTickets: Ember.computed.sort('tickets', 'sortProperties'),

  actions: {
    closeTicket(ticket) {
      console.log("In the ticket list, current: " + ticket);
      this.sendAction('closeTicket', ticket);
    }
  }
});
