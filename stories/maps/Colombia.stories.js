import { VectorMap } from "@react-jvectormap/core";
import { coMill, coMerc, README } from "@react-jvectormap/maps";
import { coMill, coMerc, README } from "@react-jvectormap/colombia";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Colombia",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: coMill,
  fileName: "coMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: coMerc,
  fileName: "coMerc",
};
