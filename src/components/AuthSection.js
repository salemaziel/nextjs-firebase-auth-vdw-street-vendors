import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "components/SectionHeader";
import Auth from "components/Auth";

function AuthSection(props) {
  // Values for each auth type
  const allTypeValues = {
    signin: {
      // Top title
      title: "Welcome back",
      // Submit button text
      buttonText: "Sign in",
      // Link text to other auth types
      linkTextSignup: "Create an account",
      linkTextForgotpass: "Forgot Password?",
    },
    signup: {
      title: "Sign Up To Place Pre-Orders",
      buttonText: "Sign up",
      linkTextSignin: "Sign in",
    },
    forgotpass: {
      title: "Get a new password",
      buttonText: "Reset password",
    },
    changepass: {
      title: "Choose a new password",
      buttonText: "Change password",
    },
  };

  // Ensure we have a valid auth type
  const currentType = allTypeValues[props.type] ? props.type : "signup";

  // Get values for current auth type
  const typeValues = allTypeValues[currentType];

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container
        style={{
          maxWidth: "450px",
        }}
      >
        <SectionHeader
          title={allTypeValues[currentType].title}
          subtitle=""
          size={2}
          spaced={true}
          className="text-center"
        />
        <Auth
          type={currentType}
          typeValues={typeValues}
          providers={props.providers}
          afterAuthPath={props.afterAuthPath}
          key={currentType}
        />
      </Container>
    </Section>
  );
}

export default AuthSection;
