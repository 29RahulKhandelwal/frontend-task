// Spline Chart Start
const fullData = [];
const startDate = new Date("2023-01-01");
const now = new Date("2025-06-01");

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const monthDiff =
  (now.getFullYear() - startDate.getFullYear()) * 12 +
  (now.getMonth() - startDate.getMonth()) +
  1;

for (let i = 0; i < monthDiff; i++) {
  const date = new Date(startDate);
  date.setMonth(date.getMonth() + i);
  const month = date.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });

  fullData.push({
    month: month,
    revenue: getRandom(50000, 250000),
    expenses: getRandom(20000, 200000),
  });
}

// Utility functions
function parseMonthYear(monthStr) {
  return new Date(Date.parse("01 " + monthStr));
}

function formatRevenue(value) {
  return `$${(value / 1000).toFixed(1)}k`;
}

function getRevenueSumInRange(data, startDate, endDate) {
  return data
    .filter((entry) => {
      const entryDate = parseMonthYear(entry.month);
      return entryDate >= startDate && entryDate <= endDate;
    })
    .reduce((sum, entry) => sum + entry.revenue, 0);
}

function filterDataByMonthRange(data, startStr, endStr) {
  const start = parseMonthYear(startStr);
  const end = parseMonthYear(endStr);
  return data.filter((item) => {
    const current = parseMonthYear(item.month);
    return current >= start && current <= end;
  });
}

// Chart rendering
let chart;
function renderChart(filteredData) {
  const categories = filteredData.map((item) => item.month);
  const revenue = filteredData.map((item) => item.revenue);
  const expenses = filteredData.map((item) => item.expenses);

  const options = {
    series: [
      { name: "Revenue", data: revenue },
      { name: "Expenses", data: expenses },
    ],
    colors: ["#CB3CFF", "#00C2FF"],
    chart: { height: 350, type: "area", toolbar: { show: false } },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 1 },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        gradientToColors: [
          "rgba(87, 93, 255, 0)", // end color for both series
          "rgba(87, 93, 255, 0)",
        ],
        opacityFrom: 0.2, // 20% opacity at top
        opacityTo: 0, // fade to 0 at bottom
        stops: [0, 100],
        colorStops: [
          [
            {
              offset: 0,
              color: "rgba(87, 93, 255, 1)",
              opacity: 0.2,
            },
            {
              offset: 100,
              color: "rgba(87, 93, 255, 0)",
              opacity: 0,
            },
          ],
          [
            {
              offset: 0,
              color: "rgba(87, 93, 255, 1)",
              opacity: 0.2,
            },
            {
              offset: 100,
              color: "rgba(87, 93, 255, 0)",
              opacity: 0,
            },
          ],
        ],
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: categories,
      labels: { style: { colors: "#FFFFFF" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: { colors: "#FFFFFF" },
        formatter: (val) => (val / 1000).toFixed(0) + "K",
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      labels: { colors: "#ffffff" },
    },
  };

  if (chart) {
    chart.updateOptions(options);
  } else {
    chart = new ApexCharts(document.querySelector(".chart--spline"), options);
    chart.render();
  }
}

// Dropdown logic
const dropdownButton = document.getElementById("dropdownButton");
const dropdownList = document.getElementById("dropdownList");
const selectedText = document.getElementById("selectedText");

dropdownButton.addEventListener("click", () => {
  dropdownList.classList.toggle("active");
});

dropdownList.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") {
    const selectedRange = e.target.textContent.trim();
    selectedText.textContent = selectedRange;

    document
      .querySelectorAll(".dropdown-list div")
      .forEach((el) => el.classList.remove("selected"));
    e.target.classList.add("selected");
    dropdownList.classList.remove("active");

    const [start, end] = selectedRange.split(" - ");
    const startDate = parseMonthYear(start);
    const endDate = parseMonthYear(end);

    const filtered = filterDataByMonthRange(fullData, start, end);
    renderChart(filtered);

    const totalRevenue = getRevenueSumInRange(fullData, startDate, endDate);
    document.getElementById("total-revenue").textContent =
      formatRevenue(totalRevenue);
  }
});

window.addEventListener("click", (e) => {
  if (!dropdownButton.contains(e.target)) {
    dropdownList.classList.remove("active");
  }
});

// Initial chart render
const defaultStart = "Jan 2023";
const defaultEnd = "Dec 2023";
const defaultData = filterDataByMonthRange(fullData, defaultStart, defaultEnd);
renderChart(defaultData);

document.getElementById("total-revenue").textContent = formatRevenue(
  getRevenueSumInRange(
    fullData,
    parseMonthYear(defaultStart),
    parseMonthYear(defaultEnd)
  )
);
// // Spline Chart Ends

// Column Chart Starts
var ColumnChartOptions = {
  series: [
    {
      name: "timestamp-series",
      data: [
        49, 40, 49, 35, 44, 15, 38, 55, 49, 40, 55, 44, 49, 30, 38, 35, 32, 49,
        42, 34, 28, 55, 44, 49,
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 150,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      borderRadius: 5,
      borderRadiusApplication: "end",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: [
      "12 AM",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "8 AM",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "4 PM",
      "",
      "",
      "",
      "",
      "",
      "",
      "11 PM",
    ],
    labels: {
      style: {
        colors: "#AEB9E1",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    title: {
      text: "",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    enabled: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  legend: {
    show: false,
  },
};

var ColumnChart = new ApexCharts(
  document.querySelector("#render-column-chart"),
  ColumnChartOptions
);
ColumnChart.render();
// Column Chart Ends

// Line Chart Starts
var LineChartOptions = {
  series: [
    {
      name: "Sessions",
      data: [
        0, 20, 150, 30, 150, 90, 20, 140, 350, 10, 10, 10, 10, 115, 10, 0, 120,
        80,
      ],
    },
  ],
  chart: {
    height: 120,
    type: "line",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ["#CB3CFF"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    width: 2,
  },
  title: {
    text: "",
  },
  xaxis: {
    categories: [
      "12 AM",
      "",
      "",
      "",
      "",
      "8 AM",
      "",
      "",
      "",
      "",
      "",
      "4 PM",
      "",
      "",
      "",
      "",
      "11 PM",
    ],
    labels: {
      style: {
        colors: "#AEB9E1",
        fontSize: "12px",
      },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#AEB9E1",
      },
    },
  },
  grid: {
    show: false,
  },
  legend: {
    show: false,
  },
  tooltip: {
    enabled: false,
  },
};

var LineChart = new ApexCharts(
  document.querySelector("#render-line-chart"),
  LineChartOptions
);
LineChart.render();
