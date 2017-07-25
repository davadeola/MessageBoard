import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      messages:this.store.findAll('message'),
      answers: this.store.findAll('answer')
    });
  },
  actions:{
    destroyMessage(message) {
      var question = message;
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },

    upVote(message){
      var votes = message.get('upvote');
      var totalVotes = votes +=1;
      message.setProperties({votes: totalVotes });
      message.save();
        console.log('indexworking');
    }
  }

});
