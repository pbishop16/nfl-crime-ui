export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.namespace = '/api/v1';

  this.get('/players', function(request, schema) {
    if (true) {
      return {players: schema.players.where({team: "TEN"})};
    } else {
      return {players: schema.players.findAll('player')};
    }
  });
  this.get('/players/:id', 'player');
  this.get('/crimes', 'crime');
  this.get('/crimes/:id', 'crime', function(request, db){
    let crime = db.crimes.find(request.params.id);
    return {
      crime: crime,
      player_id: db.players.where({ id: crime.project_id })
    };
  });
  this.get('/teams', 'team');
  this.get('/teams/:id', 'team');
}
