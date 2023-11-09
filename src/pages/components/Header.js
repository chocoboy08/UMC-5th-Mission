import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div({
  backgroundColor: "#02294a",
  width: "100%",
  display: "flex",
  alignItems: "center",
  paddingLeft: "10rem",
  boxSizing: "border-box",
});
const MenuList = styled.ul({
  listStyle: "none",
  display: "flex",
  gap: 20,
});
const MenuItem = styled.li({
  color: "white",
  fontWeight: "bold",
});
function Header() {
  const menuItemText = [
    { name: "영화", route: "movies" },
    { name: "TV 프로그램", route: "tv" },
    { name: "인물", route: "celebrity" },
  ];
  return (
    <Wrapper>
      <Link to={"/"}>
        <img
          style={{ width: "154px", height: "20px" }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
      <MenuList>
        {menuItemText.map((item) => {
          return (
            <Link
              to={`/${item.route}`}
              style={{ textDecoration: "none" }}
              key={`header-menuitem-${item.name}`}
            >
              <MenuItem>{item.name}</MenuItem>
            </Link>
          );
        })}
      </MenuList>
    </Wrapper>
  );
}

export default Header;
