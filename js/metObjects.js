$('#myTable').DataTable({
    ajax: {
        url: '../MetObjects_clean.json',
        dataSrc: 'results'
    },
    columns: [
        { data: 'Object Number' },
        { data: 'Object ID' },
        { data: 'Department' },
        { data: 'AccessionYear' },
        { data: 'Object Name' },
        { data: 'Title' },
        { data: 'Culture' },
        { data: 'Period' },
        { 
            data: 'Artist Display Name', 
            render: function(data, type, row, meta) {
                console.log('Row:', meta.row, 'Artist Display Name:', data);  // Log each row’s data
                return data || '';  // Return data or an empty string if undefined
            }
        },
        { data: 'Artist Nationality', defaultContent: '' },
        { data: 'Object Date' },
        { data: 'Object Begin Date' },
        { data: 'Object End Date' },
        { data: 'Medium' },
        { data: 'Country', defaultContent: '' },
        { data: 'Region', defaultContent: '' }
    ]
});
