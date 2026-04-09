import LightRays from "./components/LightRays";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Home from "./components/Home";
import About from "./components/About";
import WorkPage from "./components/WorkPage";
import UiGalleryPage from "./components/UiGalleryPage";
import AiAssetPage from "./components/AiAssetPage";
import PageTransition from "./components/PageTransition";
import Gnb from "./components/Gnb";
import Footer from "./components/Footer";

export default function App() {
  const [route, setRoute] = useState("home");
  const [gnbTheme, setGnbTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleHashChange = () => {
      // Remove hash and query parameters to get the base route
      const hash = window.location.hash.replace("#", "").split("?")[0];
      setRoute(hash || "home");
    };

    // Set initial
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleWorkClick = () => {
    window.dispatchEvent(new CustomEvent('project-navigation', { detail: { projectId: '00' } }));
  };

  return (
    <div className="w-full min-h-screen relative bg-white">
      {/* Fixed GNB - Persistent across pages */}
      <Gnb theme={gnbTheme} onWorkClick={handleWorkClick} />

      <AnimatePresence mode="wait">
        {route === "about" ? (
          <PageTransition key="about">
            <div className="absolute inset-0 w-full h-full overflow-auto">
              <About />
            </div>
          </PageTransition>
        ) : route === "work" ? (
          <PageTransition key="work">
            <WorkPage setGnbTheme={setGnbTheme} />
          </PageTransition>
        ) : route === "ui-gallery" ? (
          <PageTransition key="ui-gallery">
            <UiGalleryPage setGnbTheme={setGnbTheme} />
          </PageTransition>
        ) : route === "ai-asset" ? (
          <PageTransition key="ai-asset">
            <AiAssetPage setGnbTheme={setGnbTheme} />
          </PageTransition>
        ) : (
         <PageTransition key="home">
           
    <Home setGnbTheme={setGnbTheme} />
<div className="relative h-[600px] flex items-center justify-center">

  <LightRays
    raysOrigin="top-center"
    raysColor="#ffffff"
    raysSpeed={1}
    lightSpread={0.5}
    rayLength={3}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0}
    distortion={0}
    className="absolute inset-0 z-0"
    pulsating={false}
    fadeDistance={1}
    saturation={1}
  />
<h1 className="relative z-10 text-4xl">
    타이틀
  </h1>
</div>
          </PageTransition>
        )}
      </AnimatePresence>
      
      {/* Footer - Visible on all pages except Home and About */}
      {route !== 'home' && route !== 'about' && (
        <Footer isFixed={false} />
      )}
    </div>
  );
}
