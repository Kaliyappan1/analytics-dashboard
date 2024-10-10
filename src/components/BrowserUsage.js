import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "../assets/styles/BrowserUsage.css";

// Register necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const BrowserUsage = () => {
  const data = {
    labels: ["Chrome", "Firefox", "Others"],
    datasets: [
      {
        label: "Browser Usage",
        data: [60, 25, 10], 
        backgroundColor: ["#F43597", "#6038EA", "#F1EFFB"],
        hoverBackgroundColor: ["#842442", "#38328A", "#FF4C3C"],
        borderWidth: 0, 
      },
    ],
  };

  // Find the max usage percentage and corresponding label
  const maxValue = Math.max(...data.datasets[0].data); 
  const maxIndex = data.datasets[0].data.indexOf(maxValue); 
  const maxLabel = data.labels[maxIndex];

  // Plugin to show the text in the center
  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { width, height, ctx } = chart;
      ctx.restore();
      const fontSize = (height / 200).toFixed(2);
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = "middle";

      const text = `${maxLabel}: ${maxValue}%`;
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%", 
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, 
      },
      centerText: {},
    },
  };

  return (
    <div className="browser-usage">
         <h4>Browser</h4>
         <p className="icon">No of requests by browser</p>
      <div className="doughnut-container">
        <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
      </div>
    </div>
  );
};

export default BrowserUsage;
