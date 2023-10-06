// ============== Chart Options ===================/
export const chartOptions = {
  series: [
    {
      name: "Assistants",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "Students",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ],
  options: {
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },

    grid: {
      show: false,
    },
  },
};

// ============== Color Values ===================/
const colorValues = {
  dark_blue: "#14a2b6",
  light_blue: "#50a3ae",
  dark_red: "#ce2626",
  light_red: "#ca4949",
  dark_purple: "#8d3895",
  light_purple: "#b757bf",
  dark_green: "#519a77",
  light_green: "#309765",
  dark_orange: "#f48221",
  light_orange: "#eb9a53",
};

// ============== Chart Color Options ===================/
export const colorOptions = {
  "theme-color-blue": [colorValues.dark_blue, colorValues.light_orange],
  "theme-color-red": [colorValues.dark_red, colorValues.light_green],
  "theme-color-purple": [colorValues.dark_purple, colorValues.light_blue],
  "theme-color-green": [colorValues.dark_green, colorValues.light_red],
  "theme-color-orange": [colorValues.dark_orange, colorValues.light_purple],
};
