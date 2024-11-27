const container = document.querySelector('.container');

for (i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row')
    for(i = 0; i < 16; i++){
        const column = document.createElement('div');
        column.classList.add('column')
        row.appendChild(column);
    }
    container.appendChild(row);
}