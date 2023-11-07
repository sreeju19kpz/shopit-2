import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CalculateTotal } from "./Components/Feature/cartSlice";

const Layout = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(CalculateTotal());
  }, [cartItems]);
  return (
    <div className="default width-100-p ali-ite-cnt height-100-p mak-ele-uns">
      <div className="default flex flex-grow=1 width-100-p  height-100-p">
        <div className="default flex flex-grow-1 width-100-p height-100-p">
          <Header />
          <Outlet />
          <div id="mobile-nav-panel"></div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
