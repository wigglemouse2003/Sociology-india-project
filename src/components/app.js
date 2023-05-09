import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";

// intro
import AverageFamily from "./pages/intro/average-family";
import BasicInfo from "./pages/intro/info";
import BriefHistory from "./pages/intro/history";
import Countercultures from "./pages/intro/counterculture";
import Subcultures from "./pages/intro/subculture";

// material
import Architecture from "./pages/material/architecture";
import Art from "./pages/material/art";
import Clothing from "./pages/material/clothing";
import Food from "./pages/material/food";
import Tech from "./pages/material/tech";

// nonmaterial
import Education from "./pages/nonmaterial/education";
import Etiquitte from "./pages/nonmaterial/etiquette";
import Healing from "./pages/nonmaterial/healing";
import Music from "./pages/nonmaterial/music";
import Recreation from "./pages/nonmaterial/recreation";
import Religion from "./pages/nonmaterial/religions";

// universals
import Birth from "./pages/universals/birth";
import Age from "./pages/universals/age";
import Marriage from "./pages/universals/marriage";
import Funeral from "./pages/universals/funeral";

// universals
import Languages from "./pages/language/languages";
import Slang from "./pages/language/slang";
import Symbols from "./pages/language/symbols";
import Gestures from "./pages/language/gestures";

// values and norms
import Values from "./pages/values-and-norms/values";
import Proverbs from "./pages/values-and-norms/proverbs";
import Norms from "./pages/values-and-norms/norms";
import Folkways from "./pages/values-and-norms/folkways";
import Mores from "./pages/values-and-norms/mores";
import Taboos from "./pages/values-and-norms/taboos";

import NoMatch from "./pages/no-match";
import Icons from "../helpers/icons";

export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();
  }

  render() {
    return (
      <div className="container">
        <div>
          <NavigationContainer />
          <Routes>
            <Route end path="/" element={<Home />} />

            {/* Intro Pages */}
            <Route path="intro/history" element={<BriefHistory />} />
            <Route path="intro/info" element={<BasicInfo />} />
            <Route path="intro/average-family" element={<AverageFamily />} />
            <Route path="intro/subcultures" element={<Subcultures />} />
            <Route path="intro/countercultures" element={<Countercultures />} />

            {/* Material Culture Pages */}
            <Route path="material/architecture" element={<Architecture />} />
            <Route path="material/art" element={<Art />} />
            <Route path="material/clothing" element={<Clothing />} />
            <Route path="material/food" element={<Food />} />
            <Route path="material/tech" element={<Tech />} />

            {/* Nonaterial Culture Pages */}
            <Route path="nonmaterial/music" element={<Music />} />
            <Route path="nonmaterial/recreation" element={<Recreation />} />
            <Route path="nonmaterial/healing" element={<Healing />} />
            <Route path="nonmaterial/etiquette" element={<Etiquitte />} />
            <Route path="nonmaterial/religions" element={<Religion />} />
            <Route path="nonmaterial/education" element={<Education />} />

            {/* Cultural Universals Pages */}
            <Route path="universals/birth" element={<Birth />} />
            <Route path="universals/coming-of-age" element={<Age />} />
            <Route path="universals/marriage" element={<Marriage />} />
            <Route path="universals/funeral" element={<Funeral />} />

            {/* Language Pages */}
            <Route path="language/languages" element={<Languages />} />
            <Route path="language/slang" element={<Slang />} />
            <Route path="language/symbols" element={<Symbols />} />
            <Route path="language/gestures" element={<Gestures />} />

            {/* Values Pages */}
            <Route path="values/values" element={<Values />} />
            <Route path="values/proverbs" element={<Proverbs />} />
            <Route path="values/norms" element={<Norms />} />
            <Route path="values/folkways" element={<Folkways />} />
            <Route path="values/mores" element={<Mores />} />
            <Route path="values/taboos" element={<Taboos />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    );
  }
}
