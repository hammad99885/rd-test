import { Line } from "react-chartjs-2";

const LineChart = ({ color, height, labels, data, width }) => {
  const options = {
    legend: { display: "none" },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return width ? (
    <Line
      options={options}
      height="50"
      width={width}
      data={{
        labels,
        datasets: [
          {
            label: "aaa",
            data,
            fill: false,
            backgroundColor: color,
            borderColor: color,
          },
        ],
      }}
    />
  ) : (
    <Line
      options={options}
      height="50"
      data={{
        labels,
        datasets: [
          {
            label: "aaa",
            data,
            fill: false,
            backgroundColor: color,
            borderColor: color,
          },
        ],
      }}
    />
  );
};

export default LineChart;
