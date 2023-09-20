const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
      label: 'Monthly Sales',
      data: [65, 59, 80, 81,56],
      borderColor: 'red',
      backgroundColor:'red',
      borderWidth: 1
    }],
    title: {
        display: true,
        text: 'Monthly Sales Data',
    },
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
  
});

anime({
    targets: '.css-selector-demo',
    translateY: 50
  });

