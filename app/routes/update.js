import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('message', params.message_id);
  },

  actions:{
    editQuestion(message, params){
      Object.keys(params).forEach(function (key) {
        if(params[key] !== undefined){
          message.set(key, params[key]);
        }
      });
      message.save();
      this.transitionTo('index');
    }
  }
});
