function insert_Row() {
    let table = document.getElementById("sampleTable");

    if (!table) {
        console.error("Table not found!");
        return;
    }

    let newRow = table.insertRow(0); // Insert at the top

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}
