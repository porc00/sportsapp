Meteor.startup(function() {
  if(Activity.find().count() === 0) {
    var activity = [
      {
        'name': 'activity 1'
      },
      {
        'name': 'activity 2'
      }
    ];
    activity.forEach(function(activity) {
      Activity.insert(activity);
    });
  }
});