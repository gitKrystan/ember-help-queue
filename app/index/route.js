import Ember from 'ember';

export default Ember.Route.extend({
  actions : {
    submitTicket(params) {
      var newTicket = this.store.createRecord('ticket', params);
      newTicket.save();
      this.transitionTo('queue.current-ticket', newTicket);
    },
  }
});
