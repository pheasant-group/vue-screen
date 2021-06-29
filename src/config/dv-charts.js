import { changeDefaultConfig } from "@jiaminghi/charts";
changeDefaultConfig("color", ["#37a2da"]);
changeDefaultConfig("title", {
  style: {
    fill: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textBaseline: "bottom",
  },
});
changeDefaultConfig("xAxis", {
  axisLabel: {
    style: {
      stroke: "#fff",
    },
  },
});
