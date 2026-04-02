import React, { useEffect } from "react";
import { useRouter } from "./hooks/useRouter";
import { GCSS } from "./data/constants";
import { Navbar } from "./components/Layout/Navbar";
import { Footer } from "./components/Layout/Footer";
import { FloatingBtns } from "./components/Layout/FloatingBtns";

// Pages
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ServicesPage } from "./pages/Services";
import { BlogPage } from "./pages/Blog";
import { ContactPage } from "./pages/Contact";

// Asset injection
const injectAssets = () => {
  if (document.getElementById("ds-a")) return;
  const g = document.createElement("link");
  g.id = "ds-a"; g.rel = "stylesheet";
  g.href = "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap";
  document.head.appendChild(g);
  const fa = document.createElement("link");
  fa.rel = "stylesheet";
  fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
  document.head.appendChild(fa);
};

export default function App() {
  const { page, navigate } = useRouter();

  useEffect(() => {
    injectAssets();
    const el = document.createElement("style");
    el.id = "ds-g"; el.innerHTML = GCSS; document.head.appendChild(el);
    return () => document.getElementById("ds-g")?.remove();
  }, []);

  const renderPage = () => {
    switch (page) {
      case "about":    return <AboutPage navigate={navigate} />;
      case "services": return <ServicesPage navigate={navigate} />;
      case "blog":     return <BlogPage navigate={navigate} />;
      case "contact":  return <ContactPage />;
      default:         return <HomePage navigate={navigate} />;
    }
  };

  return (
    <>
      <Navbar page={page} navigate={navigate} />
      {renderPage()}
      <Footer navigate={navigate} />
      <FloatingBtns />
    </>
  );
}
