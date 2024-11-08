$.ajax({
    url: '../MetObjects_clean.json',
    success: function(data) {
        console.log("Data loaded: ", data);  // Check if data is logged correctly
        $('#myTable').DataTable({
            serverSide: true,
            ajax: {
                url: '../MetObjects_clean.json',
                dataSrc: 'results'
            },
            pageLength: 10,
            lengthMenu: [10, 25, 50, 100],
            columns: [
                { data: 'Object Number' },
                { data: 'Object ID' },
                { data: 'Department' },
                { data: 'AccessionYear' },
                { data: 'Object Name' },
                { data: 'Title' },
                { data: 'Culture' },
                { data: 'Period' },
                { data: 'Artist Display Name' },
                { data: 'Artist Nationality' },
                { data: 'Object Date' },
                { data: 'Object Begin Date' },
                { data: 'Object End Date' },
                { data: 'Medium' },
                { data: 'Country' },
                { data: 'Region' }
            ]
        });
    },
    error: function(xhr, status, error) {
        console.error("Error loading JSON file:", status, error);
    }
});


