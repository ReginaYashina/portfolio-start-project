import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";

export const GoTopBtn: React.FC = () => {
  const [showBtn, setshowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setshowBtn(true);
      } else {
        setshowBtn(false);
      }
    });
  }, []);
  return (
    <>
      {showBtn && (
        <StyledGoTopBtn
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <Icon
            iconId={"toTop"}
            height={"15"}
            width={"16"}
            viewBox='0 0 16 15'
          />
        </StyledGoTopBtn>
      )}
    </>
  );
};

const StyledGoTopBtn = styled.button`
  /* width: 30px;
  height: 30px; */
  background: rgba(0, 0, 0, 0.3);
  padding: 8px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999999;
`;
