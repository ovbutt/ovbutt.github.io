import { Link } from "gatsby";
import React, { useContext } from "react";
import Headroom from "react-headroom";
import styled, { css } from "styled-components";
import StyleContext from "../../contexts/StyleContext";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./header.css";

export const Header = () => {
  const { isDark } = useContext(StyleContext);
  const MainWrapper = styled.div`
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 20px;
    /* display: flex;
    align-items: center; */
    background-color: ${isDark ? "#363537" : "#fff"};
    /* justify-content: space-between; */
  `;

  const LogoName = styled.h1`
    font-weight: 900;
    font-size: 24px;
    line-height: 1;
    margin: 6px 0 6px 10px;
    display: inline-block;
    vertical-align: top;
  `;

  return (
    <header className="fixed-header ">
      <MainWrapper
        className={isDark ? "dark-menu header container" : "header container"}
      >
        <a href="/" style={{ color: isDark ? "#fff" : "#000" }}>
          <LogoName>Ovais Butt.</LogoName>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#intro">Intro</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#experience">Work Experiences</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
        <div></div>
      </MainWrapper>
    </header>
  );
};
