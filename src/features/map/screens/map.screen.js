import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components";

import { Search } from "../components/search.component";
const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => (
  <>
    <Search />
    <Map />
  </>
);
