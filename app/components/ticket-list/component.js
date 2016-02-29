import Ember from 'ember';

export default Ember.Component.extend({

  sortProperties: ['openedAt'],
  sortedTickets: Ember.computed.sort('tickets', 'sortProperties'),

  actions: {
    closeTicket(currentTicket) {
      console.log("In the ticket list, current: " + currentTicket);
      this.sendAction('closeTicket', currentTicket);
    }
  }
});
