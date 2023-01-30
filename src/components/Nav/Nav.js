import React from 'react';
import styled from 'styled-components';
function Nav() {
  const DelBtn = styled.p`
    width: 100px;
    height: 50px;
    border: none;
    color: ${(props) => props.theme.pointColor};
    font-weight: 700;
    font-size: 30px;
    background: none;
  `;
  return <DelBtn>Nav</DelBtn>;
}

export default Nav;
