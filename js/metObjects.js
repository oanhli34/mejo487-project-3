$('#myTable').DataTable({
    ajax: {
        url: '../metobjects_2.json',
        dataSrc: ''
    },
    pageLength: 10,
    scrollX: true,
    columns: [
        { data: 'Object Number' },
        { data: 'Object ID' },
        { data: 'Department' },
        { data: 'AccessionYear' },
        { data: 'Object Name' },
        { data: 'Title' },
        { data: 'Culture' },
        { data: 'Period' },
        { data: 'Artist Display Name', },
        { data: 'Artist Nationality', defaultContent: '' },
        { data: 'Object Date' },
        { data: 'Object Begin Date' },
        { data: 'Object End Date' },
        { data: 'Medium' },
        { data: 'Country', defaultContent: '' },
        { data: 'Region', defaultContent: '' }
    ]
});
