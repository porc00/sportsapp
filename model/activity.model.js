Activity = new Mongo.Collection('activity');

Activity.allow({
  insert: function(userId, activity) {
    return true;
  },
  update: function(userId, activity, fields, modifier) {
    return true;
  },
  remove: function(userId, activity) {
    return true;
  }
});