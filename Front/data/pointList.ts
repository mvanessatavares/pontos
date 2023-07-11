import { ImageProps } from "react-native";

export interface Point {
  name: string;
  image: ImageProps["source"];
  time: string;
}

import pointImage from "../assets/iconsPerfil/download.png";


export const pointList: Point[] = [
  {
    name: "ReciclaAE",
    image: pointImage ,
    time:
      "08:00 AS 17:00",
  },
  {
    name: "ECOPONTO UNA",
    image:pointImage ,
    time:
      "08:00 AS 17:00",
  },
  {
    name: "EcoSmart",
    image:pointImage ,
    time:
      "08:00 AS 17:00",
  },
  {
    name: "ECOPONTO UNA/EcoSmart",
    image:pointImage ,
    time:
      "08:00 AS 17:00",
  },
  {
    name: "Americano",
    image:pointImage ,
    time:
      "08:00 AS 17:00",
  },
  {
    name: "Espresso Organic",
    image:pointImage ,
    time:
      "08:00 AS 17:00",
  },
  {
    name: "Doppio",
    image:pointImage ,
    time:
      "08:00 AS 17:00",
  },
  {
    name: "Cortez",
    image:pointImage ,
    time:
      "08:00 AS 17:00",
  },
 
];
