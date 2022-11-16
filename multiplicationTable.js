"use strict";
;
(function (n) {
    let mcl = document.getElementById('multiplicationTable');
    mcl === null || mcl === void 0 ? void 0 : mcl.classList.add('container', 'text-center');
    for (let i = 1; i <= n; i++) {
        let row = document.createElement('div');
        mcl === null || mcl === void 0 ? void 0 : mcl.appendChild(row);
        row.classList.add('row');
        for (let j = 1; j <= i; j++) {
            let cell = document.createElement('div');
            row.appendChild(cell);
            cell.innerHTML = `${j}*${i}=${j * i}`;
            cell.classList.add('col-sm-1', 'bg-info', 'm-1');
        }
    }
})(9);
