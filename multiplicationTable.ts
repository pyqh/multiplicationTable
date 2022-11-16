;(function (n: number) {
  let mcl: HTMLElement | null = document.getElementById('multiplicationTable')
  mcl?.classList.add('container', 'text-center')
  for (let i = 1; i <= n; i++) {
    let row: HTMLElement | null = document.createElement('div')
    mcl?.appendChild(row)
    row.classList.add('row')
    for (let j = 1; j <= i; j++) {
      let cell: HTMLElement | null = document.createElement('div')
      row.appendChild(cell)
      cell.innerHTML = `${j}*${i}=${j * i}`
      cell.classList.add('col-sm-1', 'bg-info', 'm-1')
    }
  }
})(9)
