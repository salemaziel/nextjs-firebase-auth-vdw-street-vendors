import React from "react";
import HeroSection from "components/HeroSection";
import HeroSection2 from "components/HeroSection2";
import HomePage from "../components/streetVendor/HomePage"
import { useAuth } from "util/auth.js";

function IndexPage2(props) {
  const auth = useAuth();

  return (
    <>
      {auth.user && (
        <HeroSection
          bg="white"
          textColor="dark"
          size="md"
          bgImage="https://street-vendor.viadelweb.com/static/esco-arch2-2bf8ca9a881df3a968a4e74acce5139d.jpg"
          bgImageOpacity={0.8}
          title="Your landing page title here"
          subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
          image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
          buttonText="Get Started"
          buttonColor="primary"
          buttonPath="/pricing"
        />
      )}

      {!auth.user && (
        <HeroSection2
          bg="white"
          textColor="dark"
          size="md"
          bgImage="https://street-vendor.viadelweb.com/static/esco-arch2-2bf8ca9a881df3a968a4e74acce5139d.jpg"
          bgImageOpacity={0.8}
          title="Your landing page title here"
          subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
          image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
          buttonText="Get Started"
          buttonColor="primary"
          buttonPath="/pricing"
        />
      )}
    </>
  );
}

export default IndexPage2;
