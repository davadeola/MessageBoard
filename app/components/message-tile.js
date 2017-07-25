import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    destroyMessage(){
      var message =  this.get('message');
      if (confirm('Do you want to delete this message?')) {
        this.sendAction('destroyMessage' ,message);
      }
    },

    upVote(message){
      console.log('mesage tile working');
      this.sendAction('upVote', message);
    }
  }
});
