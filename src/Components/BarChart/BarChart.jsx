import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Card } from "primereact/card";
import "./BarChart.css";

export const BarChart = () => {
  const data = [
    {
      country: "AD",
      "hot dog": 141,
      "hot dogColor": "hsl(46, 70%, 50%)",
      burger: 42,
      burgerColor: "hsl(350, 70%, 50%)",
      sandwich: 68,
      sandwichColor: "hsl(99, 70%, 50%)",
      kebab: 184,
      kebabColor: "hsl(228, 70%, 50%)",
      fries: 170,
      friesColor: "hsl(113, 70%, 50%)",
      donut: 22,
      donutColor: "hsl(32, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 151,
      "hot dogColor": "hsl(15, 70%, 50%)",
      burger: 71,
      burgerColor: "hsl(186, 70%, 50%)",
      sandwich: 47,
      sandwichColor: "hsl(53, 70%, 50%)",
      kebab: 13,
      kebabColor: "hsl(283, 70%, 50%)",
      fries: 195,
      friesColor: "hsl(337, 70%, 50%)",
      donut: 88,
      donutColor: "hsl(156, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 95,
      "hot dogColor": "hsl(198, 70%, 50%)",
      burger: 13,
      burgerColor: "hsl(349, 70%, 50%)",
      sandwich: 130,
      sandwichColor: "hsl(27, 70%, 50%)",
      kebab: 160,
      kebabColor: "hsl(89, 70%, 50%)",
      fries: 80,
      friesColor: "hsl(281, 70%, 50%)",
      donut: 53,
      donutColor: "hsl(319, 70%, 50%)",
    },
    {
      country: "AG",
      "hot dog": 70,
      "hot dogColor": "hsl(56, 70%, 50%)",
      burger: 80,
      burgerColor: "hsl(287, 70%, 50%)",
      sandwich: 87,
      sandwichColor: "hsl(116, 70%, 50%)",
      kebab: 171,
      kebabColor: "hsl(140, 70%, 50%)",
      fries: 28,
      friesColor: "hsl(325, 70%, 50%)",
      donut: 173,
      donutColor: "hsl(141, 70%, 50%)",
    },
    {
      country: "AI",
      "hot dog": 106,
      "hot dogColor": "hsl(130, 70%, 50%)",
      burger: 152,
      burgerColor: "hsl(353, 70%, 50%)",
      sandwich: 102,
      sandwichColor: "hsl(69, 70%, 50%)",
      kebab: 69,
      kebabColor: "hsl(120, 70%, 50%)",
      fries: 187,
      friesColor: "hsl(283, 70%, 50%)",
      donut: 126,
      donutColor: "hsl(257, 70%, 50%)",
    },
  ];
  return (
    <Card title="My Bar Chart" className="bar-card">
      <div className="bar-chart">
        <ResponsiveBar
          data={data}
          keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
          indexBy="country"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "fries",
              },
              id: "dots",
            },
            {
              match: {
                id: "sandwich",
              },
              id: "lines",
            },
          ]}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "country",
            legendPosition: "middle",
            legendOffset: 32,
            truncateTickAt: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "food",
            legendPosition: "middle",
            legendOffset: -40,
            truncateTickAt: 0,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          }
        />
      </div>
    </Card>
  );
};
