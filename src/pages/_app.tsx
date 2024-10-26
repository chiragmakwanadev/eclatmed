import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 300,
      offset: 5,
      easing: "ease-in-out",
      delay: 100,
      once: false,
    });

    const handleRouteChange = () => {
      AOS.refresh();
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
