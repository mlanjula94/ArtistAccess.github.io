function changePage() {
    artist = $("#searchBar").val();
    console.log(artist);
    window.location.href = "artistAccess.html";
    localStorage.setItem("artist", artist);
    console.log(artist);
}

$(document).on("click", "#searchBtn", changePage);