import { VectorMap } from "@react-jvectormap/core";
import { ptMill, ptMerc, README } from "@react-jvectormap/maps";
import { ptMill, ptMerc, README } from "@react-jvectormap/portugal";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Portugal",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: ptMill,
  fileName: "ptMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: ptMerc,
  fileName: "ptMerc",
};
