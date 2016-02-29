import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  seat: DS.attr(),
  issue: DS.attr(),
  openedAt: DS.attr(),
  closedAt: DS.attr(),
  isOpen: DS.attr()
});
