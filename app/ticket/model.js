import DS from 'ember-data';

export default DS.Model.extend({
  student: DS.attr(),
  seat: DS.attr(),
  issue: DS.attr(),
  timestamp: DS.attr(),
  isOpen: DS.attr()
});
