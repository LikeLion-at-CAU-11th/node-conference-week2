module.exports = function(app){
  const member = require('./controller');

  app.get('/', member.greetMember);

  app.get('/members', member.getMemberList);
  app.post('/members', member.createMember);

}