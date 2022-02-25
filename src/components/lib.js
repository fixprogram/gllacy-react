import styled from "@emotion/styled";

const SiteWrapper = styled("div")`
  min-width: 940px;
`;

const Button = styled("button")`
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  vertical-align: top;
  color: #fff;
  text-shadow: 0 2px 5px rgba(160, 32, 11, 0.76);
  background: #f26843;
  background: -moz-linear-gradient(top, #f26843 0%, #e74a35 100%);
  background: -webkit-linear-gradient(top, #f26843 0%, #e74a35 100%);
  background: linear-gradient(to bottom, #f26843 0%, #e74a35 100%);
  border-radius: 100px;
  box-shadow: 0 2px 2px rgba(172, 16, 0, 0.64);
  cursor: pointer;
  &:hover {
    background: #f26843;
    background: -moz-linear-gradient(top, #f58669 0%, #ec6e5f 100%);
    background: -webkit-linear-gradient(top, #f58669 0%, #ec6e5f 100%);
    background: linear-gradient(to bottom, #f58669 0%, #ec6e5f 100%);
    box-shadow: 0 2px 2px rgba(172, 16, 0, 1);
  }
  &:active {
    background: #f26843;
    background: -moz-linear-gradient(top, #d84732 0%, #e1613e 100%);
    background: -webkit-linear-gradient(top, #d84732 0%, #e1613e 100%);
    background: linear-gradient(to bottom, #d84732 0%, #e1613e 100%);
    box-shadow: inset 0 2px 2px rgba(172, 16, 0, 1);
  }
`;

const MainNav = styled("nav")`
  margin: 0;
  margin-top: 13px;
  display: flex;
  justify-content: space-between;
  position: relative;
  -ms-align-items: center;
  align-items: center;
  width: 528px;
  padding-top: 9px;
  flex-wrap: wrap;
`;

export { SiteWrapper, Button, MainNav };
