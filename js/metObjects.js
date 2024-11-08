fetch('MetObjects_clean.json')
.then(response => response.json())
.then(data => {
    const tableBody = document.getElementById('tableBody');

    data.forEach(item => {
        const row = document.createElement('tr');
        const objectNumberCell = document.createElement('td');
        const objectIdCell = document.createElement('td');
        // ... add more cells as needed

        objectNumberCell.textContent = item['Object Number'];
        objectIdCell.textContent = item['Object ID'];
        // ... set text content for other cells

        row.appendChild(objectNumberCell);
        row.appendChild(objectIdCell);
        // ... append other cells to the row

        tableBody.appendChild(row);
    });
})
.catch(error => {
    console.error('Error fetching or parsing JSON:', error);
});