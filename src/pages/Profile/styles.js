import styled from "styled-components";

const colors = {
  default: "#9a99a2",
  active: "#ee8a68",
};

export const ProfileDetails = styled.div`
  height: 100%;
  background-image: linear-gradient(${colors["active"]}, "yellow");
  opacity: 0.4;
  display: grid;
  grid-template-columns: 33% 33% 33% auto;

  div {
    padding: 100px;
  }
`;

export const PostButton = styled.div`
  bottom: -12px;
  width: 60px;
  height: 30px;
  margin: 0 auto;
  padding: 0 10px 10px 10px;
  background-color: white;
  color: #9a99a2;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  border-radius: 90px 90px 0 0;
  box-shadow: 0 -9px 20px 4px ${(props) => colors[props.type || "default"]};
  cursor: pointer;

  @media only screen and (min-width: 750px) {
    width: 120px;
    height: 60px;
  }
`;

export const User = styled.div`
  display: inline-block;
  width: 150px;
  height: 150px;
  border-radius: 50%;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  background-image: url("http://placehold.it/400x200");
`;
