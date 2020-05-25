const chartData = [
  {
    option: "Ranged",
    exp: 90494658,
    color: "rgb(119, 171, 29)"
  },
  {
    option: "Woodcutting",
    exp: 18646377,
    color: "rgb(170, 142, 88)"
  },
  {
    option: "Fletching",
    exp: 88020169,
    color: "rgb(0, 176, 190)"
  },
  {
    option: "Farming",
    exp: 103118755,
    color: "rgb(177, 210, 102)"
  },
  {
    option: "Runecrafting",
    exp: 27048543,
    color: "rgb(253, 221, 76)"
  },
  {
    option: "Hunter",
    exp: 17650402,
    color: "rgb(162, 165, 132)"
  },
  {
    option: "Construction",
    exp: 16893555,
    color: "rgb(236, 238, 223)"
  },
  {
    option: "Divination",
    exp: 16561554,
    color: "rgb(122, 89, 254)"
  },
  {
    option: "Archaeology",
    exp: 1965358,
    color: "rgb(218, 221, 228)"
  }
];

const ctx = document.getElementById('chart').getContext('2d');
const newChart = new Chart(ctx, {
    type: 'pie',
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
        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             // beginAtZero: true,
        //             suggestedMin: 50,
        //             suggestedMax: 100
        //         }
        //     }]
        // },
        title: {
          display: true,
          text: 'Current skills experience',
          fontColor: "#333",
          fontSize: 20,
          padding: 20
        },
        legend: {
          display: true,
          position: "right",
          labels: {
            padding: 10
          }
        }
    }
});
