import React from "react";
import { ResponsiveLine } from "@nivo/line";
import "./LineChart.css";

export const LineChart = () => {
  const data = [
    {
      id: "japan",
      color: "hsl(123, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 233,
        },
        {
          x: "helicopter",
          y: 296,
        },
        {
          x: "boat",
          y: 69,
        },
        {
          x: "train",
          y: 24,
        },
        {
          x: "subway",
          y: 194,
        },
        {
          x: "bus",
          y: 149,
        },
        {
          x: "car",
          y: 187,
        },
        {
          x: "moto",
          y: 172,
        },
        {
          x: "bicycle",
          y: 92,
        },
        {
          x: "horse",
          y: 17,
        },
        {
          x: "skateboard",
          y: 52,
        },
        {
          x: "others",
          y: 197,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(39, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 185,
        },
        {
          x: "helicopter",
          y: 69,
        },
        {
          x: "boat",
          y: 128,
        },
        {
          x: "train",
          y: 81,
        },
        {
          x: "subway",
          y: 202,
        },
        {
          x: "bus",
          y: 78,
        },
        {
          x: "car",
          y: 49,
        },
        {
          x: "moto",
          y: 50,
        },
        {
          x: "bicycle",
          y: 260,
        },
        {
          x: "horse",
          y: 36,
        },
        {
          x: "skateboard",
          y: 54,
        },
        {
          x: "others",
          y: 109,
        },
      ],
    },
  ];

  return (
    <div className="line-chart">
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};
