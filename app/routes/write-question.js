import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('message');
  },

  actions:{
    addQuestion(params){
      var newQuestion = this.store.createRecord('message',params);
      newQuestion.save();
      alert('Saved your question');
      this.transitionTo('index');
    }
  }
});
