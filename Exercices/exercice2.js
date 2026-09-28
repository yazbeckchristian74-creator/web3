document.addEventListener("DOMContentLoaded", function () {
    const tableRows = document.querySelectorAll("#zebra-table tbody tr");
    const inputBox = document.getElementById("input-box");

    tableRows.forEach((row, index) => {
        if (index % 2 === 0) {
            row.style.background = "green";
        }

        row.addEventListener("click", function () {
            const studentName = row.cells[0].textContent;
            const studentGrade = row.cells[1].textContent;

            const message = `Selected Student\nName: ${studentName}\nGrade: ${studentGrade}`;

            alert(message);

            if (row.style.background === "green") {
                row.style.background = "white";
            } else {
                row.style.background = "green";
            }
        });
    });

    inputBox.addEventListener("input", function () {
        if (inputBox.value.length > 15) {
            inputBox.value = inputBox.value.slice(0, 15);
        }
    });
});