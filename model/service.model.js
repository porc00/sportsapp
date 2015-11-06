Service = new Mongo.Collection('service');

Service.allow({
  insert: function(userId, service) {
    return true;
  },
  update: function(userId, service, fields, modifier) {
    return true;
  },
  remove: function(userId, service) {
    return true;
  }
});