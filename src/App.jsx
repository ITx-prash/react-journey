import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Accordion from "./projects/Day01-Accordion/Accordion";
import RandomColor from "./projects/Day02-Random-colorgen/RandomColor";
import ImageSlider from "./projects/Day03-Star-Rating&Image-Slider/ImageSlider";
import RatingStar from "./projects/Day03-Star-Rating&Image-Slider/RatingStar";
import LoadMore from "./projects/Day04-Load-more-items/LoadMore";
import TreeView from "./projects/Day05-TreeView/TreeView";
import QR from "./projects/Day06-QR-Generator/QR";
import NavHeader from "./components/NavHeader";
import ThemeSwitcher from "./projects/Day07-Theme-Switch/ThemeSwitcher";
import ScrollIndicator from "./projects/Day07-Theme-Switch/ScrollIndicator";
import CustomTab from "./projects/Day08-CustomTabs/CustomTabParent";
import ModalPopup from "./projects/Day09-Modal-Popup/ModalPopup";
import GithubFind from "./projects/Day10-Github-Profiles/GithubFind";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/day01-accordion"
          element={
            <>
              <NavHeader />
              <Accordion />
            </>
          }
        />
        <Route
          path="/day02-random-color"
          element={
            <>
              <NavHeader />
              <RandomColor />
            </>
          }
        />
        <Route
          path="/day03-star-rating"
          element={
            <>
              <NavHeader />
              <div className="flex h-screen flex-col items-center justify-center gap-8">
                <RatingStar noOfStars={9} />
                <ImageSlider limit={8} />
              </div>
            </>
          }
        />
        <Route
          path="/day04-load-more"
          element={
            <>
              <NavHeader />
              <LoadMore />
            </>
          }
        />
        <Route
          path="/day05-treeview"
          element={
            <>
              <NavHeader />
              <TreeView />
            </>
          }
        />
        <Route
          path="/day06-qr-generator"
          element={
            <>
              <NavHeader />
              <QR />
            </>
          }
        />
        <Route
          path="/day07-theme-switcher"
          element={
            <>
              <NavHeader />
              <ThemeSwitcher />
            </>
          }
        />
        <Route
          path="/day07-scroll-indicator"
          element={
            <>
              <NavHeader />
              <ScrollIndicator />
            </>
          }
        />
        <Route
          path="/day08-custom-tabs"
          element={
            <>
              <NavHeader />
              <CustomTab />
            </>
          }
        />
        <Route
          path="/day09-modal-popup"
          element={
            <>
              <NavHeader />
              <ModalPopup />
            </>
          }
        />
        <Route
          path="/day10-github-profiles"
          element={
            <>
              <NavHeader />
              <GithubFind />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
