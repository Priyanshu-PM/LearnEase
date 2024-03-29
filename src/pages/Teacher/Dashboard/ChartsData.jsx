
export const barChartDataDailyTraffic = [
    {
  
      name: "Attendance",
      // yaha par total-attendance dalna hai
      data: [20, 30, 40, 20, 45, 50, 30],
    },
  ];
  
  export const barChartOptionsDailyTraffic = {
  
    chart: {
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      style: {
        
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000"
      },
      onDatasetHover: {
        style: {
          fontSize: "12px",
          fontFamily: undefined,
        },
      },
      theme: "dark",
    },
    xaxis: {
      // x-axis for bar graph
      categories: ["Session 1", "Session 2", "Session 3", "Session 4", "Session 5", "Session 6", "Session 7"],
      show: false,
      labels: {
        show: true,
        style: {
          colors: "#A3AED0",
          fontSize: "14px",
          fontWeight: "500",
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
      color: "black",
      labels: {
        show: true,
        style: {
          colors: "#CBD5E0",
          fontSize: "14px",
        },
      },
    },
    grid: {
      show: false,
      strokeDashArray: 5,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          [
            {
              offset: 0,
              color: "#4318FF",
              opacity: 1,
            },
            {
              offset: 100,
              color: "rgba(67, 24, 255, 1)",
              opacity: 0.28,
            },
          ],
        ],
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "40px",
      },
    },
  };
  
export const lineChartDataTotalSpent = [
    {
      name: "Attentiveness",
      data: [50, 64, 48, 30, 49, 30, 78],
      color: "#4318FF",
      
    },
    // {
    //   name: "Profit",
    //   data: [30, 40, 24, 46, 20, 46],
    //   color: "#6AD2FF",
    // },
  ];
  
  export const lineChartOptionsTotalSpent = {
    legend: {
      show: false,
    },
  
    theme: {
      mode: "light",
    },
    chart: {
      type: "line",
  
      toolbar: {
        show: false,
      },
    },
  
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
  
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000"
      },
      theme: 'dark',
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      type: "text",
      range: undefined,
      categories: ["Session 1", "Session 2", "Session 3", "Session 4", "Session 5", "Session 6", "Session 7"],
    },
  
    yaxis: {
      show: false,
    },
  };
  