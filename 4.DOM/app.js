document.addEventListener("DOMContentLoaded", () => {
    let table = document.querySelector(".table"),
        tableRow;

    fetch('./data.json')
        .then((response) => response.json())
        .then((data) => {
            initDOM(data);
            initSort(tableRow.children);
        });


    function initDOM(data) {

        let keys = Object.keys(data[0]),
            nextTr, nextTd;

        tableRow = nextTr = document.createElement("tr");
        table.append(nextTr);

        for (i in keys) {

            nextTd = document.createElement("td");
            nextTd.id = 'column-' + i;
            nextTd.innerHTML = keys[i];
            nextTr.append(nextTd);

        }

        for (i in data) {

            nextTr = document.createElement("tr")
            table.append(nextTr)

            for (j in data[i]) {
                nextTd = document.createElement("td");
                nextTd.innerHTML = data[i][j];
                nextTr.append(nextTd)
            }
        }
    }

    function initSort(column) {
        for (i = 0; i < column.length; i++) {
            column[i].addEventListener('click', (e) => {
                sortTable(e.currentTarget);
            })
        }
    }

    function sortTable(current) {
        let id = +current.id.replace(/[^0-9]/g, "");
        let column = [];
        for (i = 0; i < table.children.length; i++) {
            column[i] = table.children[i].children[id];
        }
        
        column.shift();
        column.sort((a, b) => {
            const aNum = parseFloat(a.innerHTML);
            const bNum = parseFloat(b.innerHTML);

            if (!isNaN(aNum) && !isNaN(bNum)) {
                return aNum - bNum;
            } else {
                return a.innerHTML.localeCompare(b.innerHTML);
            }
        });

        for (let i = 0; i < column.length; i++) {
            let newTr = document.createElement("tr")
            newTr.innerHTML = column[i].parentElement.innerHTML;
            table.append(newTr)
            column[i].parentElement.remove()
        }

    }

})
