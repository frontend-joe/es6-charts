/* Get CSS Variables */
const colorPrimary = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-primary")
  .trim();

const colorDefault = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-default")
  .trim();

const colorLabel = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-label")
  .trim();

const fontFamily = getComputedStyle(document.documentElement)
  .getPropertyValue("--font-family")
  .trim();

/* Declare Default Chart Options */

const defaultOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    selection: {
      enabled: false,
    },
    zoom: {
      enabled: false,
    },
    width: "100%",
    height: 180,
    offsetY: 8,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
};

// Bar Chart

var barOptions = {
  ...defaultOptions,
  chart: {
    ...defaultOptions.chart,
    type: "area",
  },
  tooltip: {
    enabled: true,
    fillSeriesColor: false,
    style: {
      fontFamily: fontFamily,
    },
    y: {
      formatter: (value) => {
        return `${value}K`;
      },
    },
  },
  series: [
    {
      name: "This Year",
      data: [0, 37, 15, 55, 13, 43, 0],
    },
  ],
  colors: [colorPrimary],
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      opacityFrom: 1,
      opacityTo: 0,
      stops: [0, 100],
      colorStops: [
        [
          {
            offset: 0,
            color: "#ffffff",
            opacity: 0.2,
          },
          {
            offset: 100,
            color: "#ffffff",
            opacity: 0,
          },
        ],
      ],
    },
  },
  stroke: { colors: [colorPrimary], lineCap: "round" },
  grid: {
    borderColor: "rgba(0, 0, 0, 0)",
    padding: { left: 10, right: 0, top: -16, bottom: -8 },
  },
  markers: {
    strokeColors: colorPrimary,
  },
  yaxis: {
    show: false,
  },
  xaxis: {
    labels: {
      floating: true,
      show: true,
      style: {
        fontFamily: fontFamily,
        colors: colorLabel,
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },
};

var chart = new ApexCharts(document.querySelector("#area-chart"), barOptions);

chart.render();
