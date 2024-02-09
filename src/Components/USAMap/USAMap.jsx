import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import "./USAMap.css";
// import usaStates from ".../usaStates.json";
// import usaStates from "../../usaStates.jsx";
import { Card } from "primereact/card";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export const USAMap = () => {
  return (
    <div className="map-container">
      <Card title="USA Map" style={{ width: "auto" }}>
        <ComposableMap
          projection="geoAlbersUsa"
          width={1200}
          height={500}
          projectionConfig={{
            scale: 1000,
            translate: [800 / 4, 450 / 4],
          }}
          // style={{ width: "100%", height: "auto" }}
        >
          <Geographies className="map" geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#8989e0",
                        outline: "none",
                        stroke: "#060638",
                      },
                      hover: { fill: "#F53", outline: "none" },
                      pressed: { fill: "#E42", outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </Card>
    </div>
  );
};

// import { ResponsiveChoropleth } from "@nivo/geo";
// export const USAMap = () => {
//   const data = [
//     {
//       id: "0400000US04",
//       value: 689958,
//     },
//     {
//       id: "0400000US05",
//       value: 273000,
//     },
//     {
//       id: "0400000US06",
//       value: 857116,
//     },
//     {
//       id: "0400000US08",
//       value: 714783,
//     },
//     {
//       id: "0400000US09",
//       value: 883958,
//     },
//   ];
//   return (
//     <div className="map-container">
//       <ResponsiveChoropleth
//         data={data}
//         features={usaStates.features}
//         margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
//         colors="nivo"
//         domain={[0, 1000000]}
//         unknownColor="#666666"
//         label="properties.name"
//         valueFormat=".2s"
//         projectionTranslation={[0.5, 0.5]}
//         projectionRotation={[0, 0, 0]}
//         enableGraticule={true}
//         graticuleLineColor="#dddddd"
//         borderWidth={0.5}
//         borderColor="#152538"
//         defs={[
//           {
//             id: "dots",
//             type: "patternDots",
//             background: "inherit",
//             color: "#38bcb2",
//             size: 4,
//             padding: 1,
//             stagger: true,
//           },
//           {
//             id: "lines",
//             type: "patternLines",
//             background: "inherit",
//             color: "#eed312",
//             rotation: -45,
//             lineWidth: 6,
//             spacing: 10,
//           },
//           {
//             id: "gradient",
//             type: "linearGradient",
//             colors: [
//               {
//                 offset: 0,
//                 color: "#000",
//               },
//               {
//                 offset: 100,
//                 color: "inherit",
//               },
//             ],
//           },
//         ]}
//         fill={[
//           {
//             match: {
//               id: "CAN",
//             },
//             id: "dots",
//           },
//           {
//             match: {
//               id: "CHN",
//             },
//             id: "lines",
//           },
//           {
//             match: {
//               id: "ATA",
//             },
//             id: "gradient",
//           },
//         ]}
//         legends={[
//           {
//             anchor: "bottom-left",
//             direction: "column",
//             justify: true,
//             translateX: 20,
//             translateY: -100,
//             itemsSpacing: 0,
//             itemWidth: 94,
//             itemHeight: 18,
//             itemDirection: "left-to-right",
//             itemTextColor: "#444444",
//             itemOpacity: 0.85,
//             symbolSize: 18,
//             effects: [
//               {
//                 on: "hover",
//                 style: {
//                   itemTextColor: "#000000",
//                   itemOpacity: 1,
//                 },
//               },
//             ],
//           },
//         ]}
//       />
//     </div>
//   );
// };
