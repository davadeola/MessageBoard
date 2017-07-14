import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    addAnswer(){
      var params={
        name: this.get('name'),
        answer:this.get('answer'),
        message: this.get('message')
      };
      this.sendAction('addAnswer', params);
    }
  }
});
