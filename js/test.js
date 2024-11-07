//define some sample data
var tabledata = [
    {
        "Object Number": "1979.486.1",
        "Object ID": "1",
        "Department": "The American Wing",
        "AccessionYear": "1979",
        "Object Name": "Coin",
        "Title": "One-dollar Liberty Head Coin",
        "Culture": "",
        "Period": "",
        "Artist Display Name": "James Barton Longacre",
        "Artist Nationality": "American",
        "Object Date": "1853",
        "Object Begin Date": "1853",
        "Object End Date": "1853",
        "Medium": "Gold",
        "Country": "",
        "Region": ""
      },
      {
        "Object Number": "1980.264.5",
        "Object ID": "2",
        "Department": "The American Wing",
        "AccessionYear": "1980",
        "Object Name": "Coin",
        "Title": "Ten-dollar Liberty Head Coin",
        "Culture": "",
        "Period": "",
        "Artist Display Name": "Christian Gobrecht",
        "Artist Nationality": "American",
        "Object Date": "1901",
        "Object Begin Date": "1901",
        "Object End Date": "1901",
        "Medium": "Gold",
        "Country": "",
        "Region": ""
      },
      {
        "Object Number": "1980.264.6",
        "Object ID": "3",
        "Department": "The American Wing",
        "AccessionYear": "1967",
        "Object Name": "Coin",
        "Title": "Two-and-a-Half Dollar Coin",
        "Culture": "",
        "Period": "",
        "Artist Display Name": "",
        "Artist Nationality": "",
        "Object Date": "1909-27",
        "Object Begin Date": "1909",
        "Object End Date": "1927",
        "Medium": "Gold",
        "Country": "",
        "Region": ""
      },
      
];

//create Tabulator on DOM element with id "example-table"
var table = new Tabulator("#example-table", {
    height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data:tabledata, //assign data to table
    layout:"fitColumns", //fit columns to width of table (optional)
    columns:[ //Define Table Columns
        {title:"Object #", field:"Object Number", width:150},
        {title:"Department", field:"Department", width:150},
        {title:"Title", field:"Title"},
        {title:"Date", field:"Object Date", sorter:"Object Date", hozAlign:"center"},
    ],
});

//trigger an alert message when the row is clicked
table.on("rowClick", function(e, row){ 
   alert("Row " + row.getData().id + " Clicked!!!!");
});