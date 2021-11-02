import { VectorMap } from "@react-jvectormap/core";
import { itMill, itMerc, README } from "@react-jvectormap/maps";
import { itMill, itMerc, README } from "@react-jvectormap/italy";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Italy",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: itMill,
  fileName: "itMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: itMerc,
  fileName: "itMerc",
};
