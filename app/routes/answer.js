import Ember from 'ember';

export default Ember.Route.extend({
model(params){
  return this.store.findRecord('message', params.message_id);
},
actions:{
  addAnswer(params){

    var newAnswer= this.store.createRecord('answer',params);

    var question = params.message;

  question.get('answers').addObject(newAnswer);

    newAnswer.save().then(function () {
      question.save();
    });
    this.transitionTo('answer', question);
  }
}

});
