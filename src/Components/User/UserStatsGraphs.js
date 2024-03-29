import React, { useState, useEffect } from "react";
import * as S from "./style";

import { Section } from "../Login/style";

import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map(item => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );
    setGraph(graphData);
  }, [data]);

  return (
    <Section className="graph">
      <S.Total className="graph__item graph__total">
        <p>Acessos: {total}</p>
      </S.Total>
      <div
        style={{
          boxShadow: "rgb(0 0 0 / 5%) 0rem 0.625rem 1.25rem",
        }}
      >
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: { fillOpacity: 0.9, stroke: "#fff", strokeWidth: 2 },
            label: { fontSize: 14, fill: "#333" },
          }}
        />
      </div>

      <div
        style={{
          boxShadow: "rgb(0 0 0 / 5%) 0rem 0.625rem 1.25rem",
          display: "flex",
        }}
      >
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </Section>
  );
};

export default UserStatsGraphs;
