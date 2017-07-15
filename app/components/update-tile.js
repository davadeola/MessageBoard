import Ember from 'ember';

export default Ember.Component.extend({

  actions:{
    editQuestion(message){
      var params={
        author: this.get('author'),
        question: this.get('question'),
        additionalinfo: this.get('additionalinfo')
      };
      this.sendAction('editQuestion',message,params);
    }
  }
});
