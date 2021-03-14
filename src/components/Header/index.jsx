import React from "react";
import Headroom from "react-headroom";
import styled, { css } from "styled-components";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export const Header = () => {
  const Logo = styled.a``;
  return (
    <Headroom>
      <header>
        <a>Ovais Butt</a>
        <ToggleSwitch />
      </header>
    </Headroom>
  );
};
