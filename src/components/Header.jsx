import styled from "styled-components";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMoon, IoMoonOutline } from "react-icons/io5";

import { Container } from "./Container";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/theme/theme-actions";
import { selectTheme } from "../store/theme/theme-selectors";
import {
  clearControls,
  clearCountries,
} from "../store/controls/controls-actions";
import { selectClearCountries } from "../store/controls/controls-selectors";
import { ThemeSwitcher } from "../features/theme/ThemeSwitcher";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

export const Header = () => {
  const dispatch = useDispatch();

  const cleanUp = () => {
    dispatch(selectClearCountries(clearCountries()));
  };

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={cleanUp}>Where is the world?</Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
