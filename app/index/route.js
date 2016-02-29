import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('ticket');
  },

  actions : {
    submitTicket(params) {
      // var self = this;
      var newTicket = this.store.createRecord('ticket', params);
      newTicket.save();
        // .then(function() {
        // self.refresh();
      // });
    },
  }
});
