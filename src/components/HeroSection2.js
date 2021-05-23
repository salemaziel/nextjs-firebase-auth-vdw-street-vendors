import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "components/SectionHeader";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import NewsletterSection from "components/NewsletterSection";

function HeroSection2(props) {
  return (
    <>
      <Section
        bg={props.bg}
        textColor={props.textColor}
        size={props.size}
        bgImage={props.bgImage}
        bgImageOpacity={props.bgImageOpacity}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="text-center text-lg-left">
              <SectionHeader
                title={props.title}
                subtitle={props.subtitle}
                size={1}
                spaced={true}
              />

              <Link href={props.buttonPath} passHref={true}>
                <Button variant={props.buttonColor} size="lg">
                  {props.buttonText}
                </Button>
              </Link>
            </Col>
            <Col className="offset-lg-1 mt-5 mt-lg-0 " />
          </Row>
        </Container>
      </Section>
      <Row>
        <Col>
          <NewsletterSection
            bg="white"
            textColor="dark"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title="Stay in the know"
            subtitle="Receive our latest articles and feature updates"
            buttonText="Subscribe"
            buttonColor="primary"
            inputPlaceholder="Enter your email"
            subscribedMessage="You are now subscribed!"
          />
        </Col>
      </Row>
    </>
  );
}

export default HeroSection2;
