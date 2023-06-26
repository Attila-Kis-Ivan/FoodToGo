import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

const firebaseConfig = {
  apiKey: "AIzaSyBDU7L76U_KcgDOUP-RhVM8C-PCUEoJWmo",
  authDomain: "foodtogo-f71a8.firebaseapp.com",
  projectId: "foodtogo-f71a8",
  storageBucket: "foodtogo-f71a8.appspot.com",
  messagingSenderId: "660325960529",
  appId: "1:660325960529:web:d5ff5ea75607d966f9e170",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const auth = firebase.auth();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword("ati@test.com", "testlogin")
        .then((user) => {
          setIsAuthenticated(true);
        })
        .then((e) => {
          console.log(e);
        });
    }, 2000);
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
