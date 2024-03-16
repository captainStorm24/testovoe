let table = document.querySelector(".table")
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        let tableBody = document.createElement("tbody");
        let keys = Object.keys(data[0]);
        for (let i = 0; i < data.length; i++) {
            let row = document.createElement("tr");
            for (let j = 0; j < keys.length; j++) {
                let cell = document.createElement("td");
                cell.textContent = data[i][keys[j]];
                row.appendChild(cell);
            }
            tableBody.appendChild(row);
        }
        tableBody.id = "tBody";
        table.appendChild(tableBody);
        console.log(tBody)

    });

