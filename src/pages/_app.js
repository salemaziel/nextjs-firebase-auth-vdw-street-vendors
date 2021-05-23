import React from "react";
import "styles/global.scss";
//import "styles/global2.scss";
import NavbarCustom from "components/NavbarCustom";
import Footer from "components/Footer";
import { AuthProvider } from "util/auth.js";

//import 'tailwindcss/tailwind.css'


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <>
        {/*<NavbarCustom
          bg="white"
          variant="light"
          expand="md"
          logo="https://uploads.divjoy.com/logo.svg"
        />*/}

        <Component {...pageProps} />

        {/*<Footer
          bg="light"
          textColor="dark"
          size="sm"
          bgImage=""
          bgImageOpacity={1}
          description="A short description of what you do here"
          copyright="© 2020 Company"
          logo="https://uploads.divjoy.com/logo.svg"
        />*/}
      </>
    </AuthProvider>
  );
}

export default MyApp;
