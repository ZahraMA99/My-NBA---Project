class Renderer {
  renderTeam(data) {
    let source = $("#teamPlayers-templete").html();
    let template = Handlebars.compile(source);
    let teamPlayers = template({teamPlayersInfo: data});
    $(".teamView-container").append(teamPlayers);
  }
}










