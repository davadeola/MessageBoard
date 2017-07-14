import Ember from 'ember';

export default Ember.Component.extend({
actions:{
  addQuestion(){
    var params ={
      author: this.get('author'),
      question: this.get('question'),
      additionalinfo: this.get('additionalinfo')
    };
    this.sendAction('addQuestion', params);
  }
}

});
