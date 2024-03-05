var app = angular.module('dashboardApp', []);

app.controller('DashboardController', function () {
    // Your chart data and configurations go here

    // Revenue Chart
    var revenueData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Revenue',
            data: [10000, 15000, 20000, 18000, 25000, 30000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    var revenueConfig = {
        type: 'bar',
        data: revenueData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    new Chart(document.getElementById('revenue-chart'), revenueConfig);

    // Sales by Region Chart
    var salesData = {
        labels: ['North', 'South', 'East', 'West'],
        datasets: [{
            label: 'Sales',
            data: [120, 90, 150, 80],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 205, 86, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    };

    var salesConfig = {
        type: 'pie',
        data: salesData,
    };

    new Chart(document.getElementById('sales-chart'), salesConfig);
});
