import logo from "../../assets/logo.svg";
import { ImageContainer } from "../styles";
import { Box, Typography, styled } from "@mui/material/";

const NavContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const NavButton = styled(Typography)`
  margin-left: auto;
  color: #4ad2bf;
  border: 2px solid #4ad2bf;
  border-radius: 5px;
  padding: 0.3rem 0.8rem 0.3rem 0.8rem;
  font-size: 14px !important ;
  cursor: pointer;
`;
export default function Navbar() {
  return (
    <NavContainer>
      <ImageContainer src={logo} alt="logo" />
      <NavButton component="div">How it works</NavButton>
    </NavContainer>
  );
}
