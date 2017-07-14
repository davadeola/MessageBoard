import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      messages:this.store.findAll('message'),
      answers: this.store.findAll('answer')
    });
  }

});
