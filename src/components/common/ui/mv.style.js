import styled from "styled-components"

export const LogoImageContainer = styled.div`
  text-align: center;
  padding-top: 40px;
  @media (max-width: 1600px) {
    padding-top: 30px;
  }
  img {
    margin: 0;
  }
`
export const GradientDiv = styled.section`
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  opacity: 0.16;
  left: -100px;
  top: -100px;
  background: radial-gradient(circle closest-side, #25377, #050941);
  @media (max-width: 1440px) {
    width: 450px;
    height: 450px;
  }
`
const MainWrapper = styled.section`
  background: #050941;
  height: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .mainContainer {
    @media (min-width: 600px) {
      width: 600px;
      max-width: 100%;
    }
  }
`

export const MainContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 99;
  padding: 60px 0;
  .mainContainer {
    z-index: 99;
    position: relative;
  }
  .Ticker {
    border-style: solid;
    border-width: 1px;
    border-color: #161b58;
    background-color: #161b58;
    color: rgba(255, 255, 255, 0.902);
    box-shadow: 0px 5px 15px 0px rgba(22, 53, 76, 0.05);
    padding: 10px 16px;
    border-radius: 28px;
    margin-bottom: 10px;
    font-size: 14px;
    @media (max-width: 1440px) {
      font-size: 12px;
      padding: 5px 14px;
    }
  }
  h2 {
    font-size: 48px;
    font-family: "Roboto";
    color: #e3b83e;
    line-height: 1.25;
    text-align: center;
    max-width: 550px;
    font-weight: 300;
    letter-spacing: -0.25px;
    margin-bottom: 20px;

    @media (max-width: 1440px) {
      font-size: 36px;
      max-width: 550px;
      margin-bottom: 20px;
    }
    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
      max-width: 100%;
    }
  }
  p {
    font-size: 16px;
    font-family: "Roboto";
    color: #fff;
    line-height: 1.8;
    text-align: center;
    max-width: 420px;
    @media (max-width: 768px) {
      font-size: 15px;
    }
    @media (max-width: 480px) {
      max-width: 100%;
    }
  }
`
export const ParticleWrapper = styled.div`
  position: absolute;
  width: 100%;
`

export const FooterSection = styled.div`
  position: relative;
  padding-bottom: 40px;
  @media (max-width: 1600px) {
    padding-bottom: 30px;
  }

  .social_profiles {
    justify-content: center;
    .social_profile_item {
      border-radius: 50%;
      background-color: rgba(239, 245, 249, 0.102);
      width: 46px;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease;
      cursor: pointer;
      @media (max-width: 1440px) {
        width: 36px;
        height: 36px;
      }
      a {
        color: #fff;
        font-size: 16px;
        transition: all 0.5s ease;
      }
      &:hover {
        background-color: rgba(239, 245, 249, 0.251);
        a {
          color: #fff;
        }
      }
    }
  }
  p {
    margin-top: 25px;
    font-size: 16px;
    font-family: "Roboto";
    color: #e3b83e;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 0;
    @media (max-width: 1440px) {
      font-size: 14px;
      margin-top: 15px;
    }
  }
`

export default MainWrapper
