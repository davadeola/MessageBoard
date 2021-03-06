import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  question: DS.attr(),
  additionalinfo: DS.attr(),
  answers: DS.hasMany('answer', {async: true}),
  upvote: DS.attr(),
  downvote: DS.attr()
});
