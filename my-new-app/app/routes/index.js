import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    // Set the IndexController's `data`
    controller.set('data', '<>"\'&');
    // controller.set('data', '\0'); // null

    /*
    controller.set('data', '<> "\'&'); // with space
    controller.set('data', 'javascript:alert(0)'); // for URI
    controller.set('data', 'x:expression(alert(0));'); // for CSS
    controller.set('data', ';:[]{}()'); // for CSS
    */
  }
});
