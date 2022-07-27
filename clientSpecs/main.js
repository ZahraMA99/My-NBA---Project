render = new Renderer();


const  getRoaster = function (){
    $(".teamView-container").empty();
    const teamName = $("input").val();
    $.get(`/teams/${teamName}`, function (data) {
        render.renderTeam(data);
    })
}

$("#get-roster").on("click", getRoaster);
