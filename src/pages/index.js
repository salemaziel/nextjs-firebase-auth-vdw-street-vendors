import React from "react";
//import HeroSection from "components/HeroSection";
//import HeroSection2 from "components/HeroSection2";
import HomePage from "components/streetVendor/HomePage"
import HomePageNoAuth from "components/streetVendor/HomePagenoAuth"
import { useAuth } from "util/auth.js";

function IndexPage(props) {
  const auth = useAuth();

  return (
    <>
      {auth.user && (
        <HomePage />
      )}

      {!auth.user && (
          <HomePageNoAuth />
      )}
    </>
  );
}

export default IndexPage;
