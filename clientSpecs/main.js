
const render = function (data) {
  const source = $("#teamPlayers-container").html();
  const templet = Handlebars.compile(source);
  const someHtml = templet({ players: data });
  $("#teamPlayers").append(someHtml);
};

$("#get-roster").on("click", function () {
  $("#teamPlayers").empty();
  let teamName = $("input").val();
  $.get(`/teams/${teamName}`, function (data) {
    render(data);
  });
});
