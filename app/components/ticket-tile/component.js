import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['well'],
  classNameBindings: ['isCurrentTicket'],

  isCurrentTicket: Ember.computed('ticket', 'currentTicket', function() {
    var ticket = this.get('ticket');
    var currentTicket = this.get('currentTicket');
    return ticket.id === currentTicket;
  })
});
