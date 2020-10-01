import React from "react"
import { Link } from "gatsby"
import Particles from "react-particles-js"

import MainWrapper, {
  LogoImageContainer,
  GradientDiv,
  ParticleWrapper,
  MainContentSection,
  FooterSection,
} from "../components/common/ui/mv.style"

import LogoImage from "../components/common/static/images/mv.png"
import { SOCIAL_PROFILES } from "../components/common/data/social-share/mv"

import Container from "../components/Container"
import SocialShare from "../components/SocialShare"
import SEO from "../components/SEO"

const IndexPage = () => {
  return (
    <React.Fragment>
      <SEO title="title" />
      <MainWrapper>
        <LogoImageContainer>
          <Link to={"/"}>
            <img src={LogoImage} alt="logo" />
          </Link>
        </LogoImageContainer>
        <ParticleWrapper>
          <Particles
            params={{
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 600,
                  },
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                  },
                },
                opacity: {
                  value: 0.2,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 7,
                  random: true,
                  anim: {
                    value: 4,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 100,
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 3,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 300,
                    line_linked: {
                      opacity: 0.4,
                      enable: true,
                    },
                  },
                  push: {
                    particles_nb: 8,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            }}
          />
        </ParticleWrapper>
        <GradientDiv />
        <Container className="mainContainer">
          <MainContentSection>
            <span className="Ticker">Our website is under construction</span>
            <h2>We are coming soon...</h2>
            <p>Maps for Change. Spatial Technologies for a sustainable future.</p>
          </MainContentSection>
        </Container>
        <FooterSection>
          <SocialShare items={SOCIAL_PROFILES} />
          <p>Copyright 2020 by Mapvizz. All rights reserved</p>
        </FooterSection>
      </MainWrapper>
    </React.Fragment>
  )
}

export default IndexPage
