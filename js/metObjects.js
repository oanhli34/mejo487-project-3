$('#myTable').DataTable({
    ajax: {
        url: 'https://opal.ils.unc.edu/~jphung/mejo487-project-3/metobjects_2.json',
        dataSrc: '',
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('AJAX Error:', textStatus, errorThrown);
            console.error('Response Text:', jqXHR.responseText);
        }
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
