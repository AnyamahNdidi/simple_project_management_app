import React from "react";
import styled from "styled-components";
import imges from "./images/1.svg"
import {animateScroll as scroll, Link} from "react-scroll"
import { NavLink, useNavigate } from "react-router-dom";

const Onboarding1 = () => {
  const Navigate = useNavigate()
  return (
    <Container id="first">
      <Wrapper>
        <Left>
          <Head >Welcome</Head>
          <Title>PMS is a mangement webApp for companies and teams to work and
            collaborate</Title>
          <Text> Note that the development build is not optimized. To create a
            production build, use npm run build. Note that the development build
            is not optimized. To create a production build, use npm run build.
            Note that the development build is not optimized. To create a
            production build, use npm run build. Note that the development build</Text>
          <Buttons>
            <Button1 
            onClick={() => {
              Navigate("/")
            }}

            >Skip</Button1>
            <Link 
            smooth={true}
            to="second"
            offset={-70}
            duration={1000}
            activeClass="active"
            >
            <Button2>Continue</Button2>
            </Link>
            
          </Buttons>
        </Left>
        <Right src={imges} />
      </Wrapper>
      <Steps>
        <Circle1/>
        <Link 
            smooth={true}
            to="second"
            offset={-70}
            duration={1000}
            activeClass="active"
            >
        <Circle2  />
        </Link>
        <Circle3  />
      </Steps>
    </Container>
  );
};

export default Onboarding1;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 80%;
  min-height: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  align-items: center;
  @media screen and (max-width: 1300px) {
    justify-content: center;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Left = styled.div`
  height: 100%;
  width: 500px;
  @media screen and (max-width: 1300px) {
    text-align: center;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Right = styled.img`
  height: 450px;
  width: 500px;
  @media screen and (max-width: 425px) {
    height: unset;
    width: 100%;
  }
`;

const Head = styled.div`
  font-size: 55px;
  font-weight: bold;
  display:block;
  @media screen and (max-width: 320px) {
    font-size: 35px;
    margin-top: 15px;
  }
`;

const Title = styled.div`
  margin-top: 25px;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 500;
  @media screen and (max-width: 320px) {
    font-size: 20px;
    margin-top: 15px;
  }
`;

const Text = styled.div`
  margin-top: 25px;
  font-weight: lighter;
`;

const Buttons = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 425px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Button1 = styled.div`
  height: 100%;
  background: #1c253c;
  color: white;
  width: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  transition: 350ms;
  display: ${({ bt }) => (!bt ? "flex" : "none")};

  :hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 425px) {
    height: 80%;
    width: 120px;
  }
`;

const Button2 = styled.div`
  height: 100%;
  background-color: #377dff;
  color: white;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  transition: 350ms;

  :hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 425px) {
    height: 80%;
    width: 120px;
  }
`;

const Steps = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
`;

const Circle1 = styled.div`
  width: 15px;
  height: 15px;
  background-color: #377dff;
  border-radius: 15px;
  cursor: pointer;
  opacity: 100%;
`;

const Circle2 = styled.div`
  width: 15px;
  height: 15px;
  background-color: #377dff;
  border-radius: 15px;
  cursor: pointer;
  opacity: 30%;
`;

const Circle3 = styled.div`
  width: 15px;
  height: 15px;
  background-color: #377dff;
  border-radius: 15px;
  cursor: pointer;
  opacity: 30%;
`;
