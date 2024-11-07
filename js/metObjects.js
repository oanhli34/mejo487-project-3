// Function to fetch and display data
function displayData() {
    fetch('metobjects.json')
      .then(response => response.json())
      .then(data => {
        const tableData = data;
        const table = new Tabulator("#metObjects-table", {
          data: tableData,
          layout: "fitColumns",
          pagination: "local",
          paginationSize: 20,
          paginationSizeSelector: [10, 20, 50, 100],
          columns: [


          ]
        });
      })
      .catch(error => {
        console.error('Error fetching or parsing JSON:', error);
      });
  }
  
  // Call the function to display the data
  displayData();

  //create Tabulator on DOM element with id "example-table"
var table = new Tabulator("#metObjects-table", {
    height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data:tabledata, //assign data to table
    layout:"fitColumns", //fit columns to width of table (optional)
    columns:[ //Define Table Columns
        { title: "Object Number", field: "Object Number" },
        { title: "Object ID", field: "Object ID" },
        { title: "Department", field: "Department" },
        { title: "Accession Year", field: "AccessionYear" },
        { title: "Object", field: "Object Name" },
        { title: "Title", field: "Title" },
        { title: "Culture", field: "Culture" },
        { title: "Period", field: "Period" },
        { title: "Artist", field: "Artist Display Name" },
        { title: "Nationality", field: "Artist Nationality" },
        { title: "Date", field: "Object Date" },
        { title: "Medium", field: "Medium" },
        { title: "Country", field: "Country" },
        { title: "Region", field: "Region" },
    ],
});
