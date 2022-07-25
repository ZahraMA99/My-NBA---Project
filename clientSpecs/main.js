render = new Renderer()
let  getRoaster = function (){
    $(".teamView-container").empty()
    const teamName = $("input").val()
    $.get(`http://localhost:3000/teams/${teamName}`, function (data) {
        render.renderTeam(data)
    })
}