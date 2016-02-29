import Ember from 'ember';

export default Ember.Component.extend({
  totalTickets: Ember.computed('openTickets', 'closedTickets', function() {
    var open = this.get('openTickets').get('length');
    var closed = this.get('closedTickets').get('length');
    return open + closed;
  }),
});
