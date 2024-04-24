function toggleDetail(detailBoxId) {
    var detailBox = document.getElementById(detailBoxId);
    if (detailBox.style.display === "" || detailBox.style.display === "none") {
        detailBox.style.display = "block";
    } else {
        detailBox.style.display = "none";
    }
}