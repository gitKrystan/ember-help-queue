import Ember from 'ember';

export default Ember.Component.extend({
  nameIsValid: Ember.computed.notEmpty('name'),
  seatIsValid: Ember.computed.match('seat', /\d+[a-z]/i),
  issueIsValid: Ember.computed.gte('issue.length', 3),
  formIsValid: Ember.computed.and('nameIsValid', 'seatIsValid', 'issueIsValid'),
  submitIsDisabled: Ember.computed.not('formIsValid'),

  actions: {
    submitTicket() {
      var params = {
        name: this.get('name'),
        seat: this.get('seat'),
        issue: this.get('issue'),
        openedAt: Date.now(),
        closedAt: null,
        isOpen: true,
        closedBy: null
      };
      this.set('name'),
      this.set('seat'),
      this.set('issue'),
      this.sendAction('submitTicket', params);
    }
  }
});
