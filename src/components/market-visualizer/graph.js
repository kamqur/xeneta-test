import React from "react";
import ReactEcharts from "echarts-for-react";

const Graph = ({ data, errors }) => {
  const labels = [];
  const meanData = [];
  const lowData = [];
  const highData = [];
  data &&
    data.forEach(item => {
      if (!labels.includes(item.day)) {
        labels.push(item.day);
        meanData.push(item.mean);
        lowData.push(item.low);
        highData.push(item.high);
      }
    });

  return (
    <div
      style={{
        paddingTop: "5%",
        width: "100%",
        height: "500px"
      }}
    >
      {errors.message ? (
        <div className="errors"> Error Loading destination </div>
      ) : (
        <ReactEcharts
          option={{
            scale: true,
            responsive: true,
            xAxis: {
              type: "category",
              data: labels
            },
            yAxis: {
              type: "value"
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              data: ["Mean", "Low", "High"]
            },
            series: [
              {
                data: meanData,
                type: "line",
                smooth: true,
                name: "Mean"
              },
              {
                data: lowData,
                type: "line",
                smooth: true,
                name: "Low"
              },
              {
                data: highData,
                type: "line",
                smooth: true,
                name: "High"
              }
            ]
          }}
        />
      )}
    </div>
  );
};

export default Graph;
