import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import "./USAMap.css";
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
