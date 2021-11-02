import { VectorMap } from "@react-jvectormap/core";
import { asiaMill, asiaMerc, README } from "@react-jvectormap/maps";
import { asiaMill, asiaMerc, README } from "@react-jvectormap/asia";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Asia",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: asiaMill,
  fileName: "asiaMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: asiaMerc,
  fileName: "asiaMerc",
};
