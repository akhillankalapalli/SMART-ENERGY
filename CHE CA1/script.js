// Survey Data for Smart Energy Management

// Awareness of Smart Energy Systems
const awarenessData = {
    labels: ['Very Aware', 'Somewhat Aware', 'Not Aware'],
    datasets: [{
        label: 'Awareness of Smart Energy Systems',
        data: [48, 35, 17], // Data values in percentage
        backgroundColor: ['#4caf50', '#ffa726', '#ff7043'],
        borderColor: '#fff',
        borderWidth: 1
    }]
};

// Motivation for Adopting Smart Energy Systems
const motivationData = {
    labels: ['Cost Savings', 'Environmental Concerns', 'Convenience', 'Government Incentives'],
    datasets: [{
        label: 'Motivation for Adopting Smart Energy Systems',
        data: [58, 36, 22, 14], // Data values in percentage
        backgroundColor: ['#2196f3', '#66bb6a', '#ffeb3b', '#ff5722'],
        borderColor: '#fff',
        borderWidth: 1
    }]
};

// Impact on Energy Bills
const energyBillsData = {
    labels: ['10-25% Reduction', 'More than 25% Reduction', 'No Significant Savings', 'Increase in Bills'],
    datasets: [{
        label: 'Impact of Smart Energy Systems on Energy Bills',
        data: [48, 28, 14, 10], // Data values in percentage
        backgroundColor: ['#8bc34a', '#009688', '#cfd8dc', '#f44336'],
        borderColor: '#fff',
        borderWidth: 1
    }]
};

// Interest in Renewable Energy Solutions
const renewableEnergyData = {
    labels: ['Interested', 'Not Interested', 'Unsure'],
    datasets: [{
        label: 'Interest in Renewable Energy Solutions',
        data: [60, 25, 15], // Data values in percentage
        backgroundColor: ['#03a9f4', '#f44336', '#9e9e9e'],
        borderColor: '#fff',
        borderWidth: 1
    }]
};

// Create the charts using Chart.js
const ctx1 = document.getElementById('awarenessChart').getContext('2d');
const ctx2 = document.getElementById('motivationChart').getContext('2d');
const ctx3 = document.getElementById('energyBillsChart').getContext('2d');
const ctx4 = document.getElementById('renewableEnergyChart').getContext('2d');

new Chart(ctx1, {
    type: 'pie',
    data: awarenessData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});

new Chart(ctx2, {
    type: 'pie',
    data: motivationData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});

new Chart(ctx3, {
    type: 'pie',
    data: energyBillsData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});

new Chart(ctx4, {
    type: 'pie',
    data: renewableEnergyData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});
``
