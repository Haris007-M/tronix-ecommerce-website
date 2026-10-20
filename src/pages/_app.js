import "@/styles/globals.css";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";

export default function App({ Component, pageProps }) {
  const [navbarOpacity, setNavbarOpacity] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const screenHeight = window.innerHeight;
    const scrollFactor = Math.min(currentScrollY / screenHeight, 1);

    if (currentScrollY > lastScrollY) {
      // Scrolling down - decrease opacity based on scroll position
      setNavbarOpacity(1 - scrollFactor);
    } else {
      // Scrolling up - increase opacity
      setNavbarOpacity(1);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <>
      <div
        className="navbar-wrapper shadow-sm sticky-top bg-white mb-5"
        style={{
          opacity: navbarOpacity,
          transition: "opacity 0.5s ease",
        }}
      >
        <Navbar />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
