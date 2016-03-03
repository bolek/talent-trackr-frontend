import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){
    Ember.run.scheduleOnce('afterRender', this, function() {
      console.log("ew ran this");
      this.$('.ui.sticky').sticky({context: "#main-profile"});
    })
  }
});
