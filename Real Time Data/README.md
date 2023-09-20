# Real Time Data Chart
This is a simple real-time chart that demonstrates how to use Chart.js to create a line chart that updates in real time.
First we are create a HTML file and CSS for chart length.For chart we are using chart.js library and create a function 
for real time data. We are usnig a method Math.random().
```
const ctx = document.getElementById("realTimeChart").getContext("2d");
let chart;
const initialData = {
  labels: [],
  datasets: [
    {
      label: "Price",
      data: [],
      borderColor: "rgba(75, 192, 196, 1)",
      borderWidth: 1,
      fill: false,
    },
  ],
};
const chartConfig = {
  type: "line",
  data: initialData,
  options: {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Price",
        },
      },
    },
    animation: false,
  },
};
chart = new Chart(ctx, chartConfig);
function addData() {
  const newData = Math.random() * 500;
  chart.data.labels.push(chart.data.labels.length);
  chart.data.datasets[0].data.push(newData);
  chart.update();
}
setInterval(addData, 1000);
```

# Hosted Link:-
https://nammi123.github.io/jsAssignment/Real%20Time%20Data/index.html

