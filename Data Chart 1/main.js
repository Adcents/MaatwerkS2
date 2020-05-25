const chartData = [
  {
    option: "Ranged",
    exp: 90494658,
    color: "rgb(80, 104, 23)"
  },
  {
    option: "Woodcutting",
    exp: 18646377,
    color: "rgb(177, 141, 75)"
  },
  {
    option: "Fletching",
    exp: 88020169,
    color: "rgb(6, 73, 78)"
  },
  {
    option: "Farming",
    exp: 103118755,
    color: "rgb(143, 166, 80)"
  },
  {
    option: "Runecrafting",
    exp: 27048543,
    color: "rgb(220, 165, 26)"
  },
  {
    option: "Hunter",
    exp: 17650402,
    color: "rgb(103, 98, 69)"
  },
  {
    option: "Construction",
    exp: 16893555,
    color: "rgb(159, 150, 103)"
  },
  {
    option: "Divination",
    exp: 16561554,
    color: "rgb(84, 74, 186)"
  },
  {
    option: "Archaeology",
    exp: 1965358,
    color: "rgb(187, 187, 185)"
  }
];

const ctx = document.getElementById('chart').getContext('2d');
const newChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: chartData.map(dataOption => dataOption.option),
        datasets: [{
            label: 'Amount of exp',
            data: chartData.map(dataOption => dataOption.exp),
            backgroundColor: chartData.map(dataOption => dataOption.color),
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    // beginAtZero: true,
                    suggestedMin: 50,
                    suggestedMax: 100
                }
            }]
        },
      legend: {
        display: false
      }
    }
});
