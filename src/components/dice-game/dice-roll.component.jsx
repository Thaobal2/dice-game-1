import React, { useState, useEffect } from "react";
import styled from "styled-components";
import zero from "../../assets/zero.jpg";
import one from "../../assets/one.jpg";
import two from "../../assets/two.jpg";
import three from "../../assets/three.jpg";
import four from "../../assets/four.jpg";
import five from "../../assets/five.jpg";
import victory from "../../assets/victory.jpg";

const GameScreen = () => {
  const [picker, setPicker] = useState(0);
  const [computer, setComputer] = useState(0);

  const computerValue = (max, min) => {
    return setComputer(Math.floor(Math.random() * (max - min + 1) + min));
  };

  useEffect(() => {
    computerValue(5, 1);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Simple Dice Game</Title>
        <Row>
          <RowItems>
            <RowBox>
              {picker === 0 ? (
                <Image src={zero} />
              ) : picker === 1 ? (
                <Image src={one} />
              ) : picker === 2 ? (
                <Image src={two} />
              ) : picker === 3 ? (
                <Image src={three} />
              ) : picker === 4 ? (
                <Image src={four} />
              ) : picker === 5 ? (
                <Image src={five} />
              ) : null}
            </RowBox>
            <Number>
              <NumberContainer onClick={() => setPicker(1)}>1</NumberContainer>
              <NumberContainer onClick={() => setPicker(2)}>2</NumberContainer>
              <NumberContainer onClick={() => setPicker(3)}>3</NumberContainer>
              <NumberContainer onClick={() => setPicker(4)}>4</NumberContainer>
              <NumberContainer onClick={() => setPicker(5)}>5</NumberContainer>
            </Number>
            <RowBoxName>Me</RowBoxName>
          </RowItems>
          <RowItems>
            <RowBox>{computer}</RowBox>
            <Button onClick={() => computerValue(5, 1)}>Press</Button>
            <RowBoxName>Computer</RowBoxName>
          </RowItems>
        </Row>
        <Result>
          <DisplayResult>Result</DisplayResult>
          <DisplayResult>
            {picker === computer ? (
              <Image src={victory} />
            ) : (
              <span>You lost</span>
            )}
          </DisplayResult>
        </Result>
      </Wrapper>
    </Container>
  );
};

export default GameScreen;

const Image = styled.img`
  width: 100px;
  height: auto;
`;

const DisplayResult = styled.div`
  width: 120px;
  height: 70px;
  display: flex;
  justify-content: center;
  font-weight: 600;
`;
const Button = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: teal;
  margin-top 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Number = styled.div`
  display: flex;
`;
const NumberContainer = styled.div`
  margin: 20px 10px;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms;

  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
const RowBoxName = styled.div`
  font-size: 30px;
`;
const RowBox = styled.div`
  width: 350px;
  height: 250px;
  border-radius: 10px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  font-weight: 500;
`;
const RowItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const Result = styled.div`
  font-size: 30px;
  margin-top: 30px;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;
const Title = styled.div`
  font-size: 80px;
  font-weight: bold;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: blue;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  color: #fff;
`;
