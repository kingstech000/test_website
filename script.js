// Modal functionality
const modal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementsByClassName("close")[0];

openModalBtn.addEventListener("click", function() {
    $('#contactModal').modal('show');
});

closeModalBtn.addEventListener("click", function() {
    $('#contactModal').modal('hide');
});
