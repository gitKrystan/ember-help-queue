import Ember from 'ember';

export default Ember.Component.extend({
  totalOpen: Ember.computed('openTickets', function() {
    return this.get('openTickets').get('length');
  }),

  totalClosed: Ember.computed('closedTickets', function() {
    return this.get('closedTickets').get('length');
  }),

  totalTickets: Ember.computed('openTickets', 'closedTickets', function() {
    var open = this.get('totalOpen');
    var closed = this.get('totalClosed');
    return open + closed;
  }),

  percentClosed: Ember.computed('openTickets', 'closedTickets', function() {
    var percent = this.get('totalClosed') / this.get('totalTickets');
    return `${parseInt(percent * 100)}%`;
  }),

  averageWait: Ember.computed('closedTickets', function() {
    var closedArray = this.get('closedTickets').toArray();
    var runningTotal = 0;
    closedArray.forEach(function(ticket) {
      runningTotal += (ticket.get('closedAt') - ticket.get('openedAt'));
    });
    return runningTotal / (this.get('totalClosed'));
  })
});
