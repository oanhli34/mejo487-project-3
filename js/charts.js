// Caveat - created with the assistance of ChatGPT and Gemini. Mainly just for bulk copy and pasting tbh...
// Function to fetch and parse the JSON file
    async function loadJSON() {
        try {
          const response = await fetch('https://opal.ils.unc.edu/~jphung/mejo487-project-3/metobjects_2.json');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching or parsing JSON:', error);
        }
      }
  
// Function to create the bar chart
async function barChart() {
        const data = await loadJSON();
  
        if (!data) {
          return;  // Exit if there is an error loading the data
        }
 // Count occurrences of each AccessionYear
        const yearCounts = data.reduce((counts, obj) => {
          const year = obj.AccessionYear || "Unknown";
          counts[year] = (counts[year] || 0) + 1;
          return counts;
        }, {});
  
// Sort accession years and prepare labels and data
        const sortedYears = Object.keys(yearCounts).sort((a, b) => a - b);
        const labels = sortedYears;
        const chartData = sortedYears.map(year => yearCounts[year]);

// Creates the bar chart
        const ctx = document.getElementById('accessionYearChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Amount of Works by Accession Year',
              data: chartData,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Count'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Date of Museum Access to Object, by Year'
                }
              }
            }
          }
        });
      }
  
 // Function to create the pie chart
 async function countryPieChart() {
    const data = await loadJSON();

    if (!data) {
      return;  // Exit if there is an error loading the data
    }

// Count occurrences of each Country
    const countryCounts = data.reduce((counts, obj) => {
      const country = obj.Country || "Unknown";
      counts[country] = (counts[country] || 0) + 1;
      return counts;
    }, {});

// Extract labels and data for the chart
    const labels = Object.keys(countryCounts);
    const chartData = Object.values(countryCounts);

    // Create the pie chart
    const ctx = document.getElementById('countryChart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Distribution of Objects by Country',
          data: chartData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',

          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',

          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.raw || 0;
                const total = chartData.reduce((a, b) => a + b, 0);
                const percentage = ((value / total) * 100).toFixed(2);
                return `${label}: ${value} (${percentage}%)`;
              }
            }
          }
        }
      }
    });
  }

// call functions to load data and create the charts
barChart();
countryPieChart();
