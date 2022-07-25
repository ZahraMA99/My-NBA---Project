class Renderer {
  renderTeamPlayers(data) {
    let source = $(".teamPlayers-templete").html();
    let template = Handlebars.compile(source);
    let teamPlayers = template(data);
    $(".teamView-container").append(teamPlayers);
  }
}
