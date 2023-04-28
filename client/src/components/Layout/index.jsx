import React from "react";

const Layout = ({ leftSide: Left, rightSide: Right, center: Center }) => {
  return (
    <div className="flex gap-4 divide-x-2 pt-[58px] lg:h-screen flex-col lg:flex-row ">
      <div className="w-full lg:w-1/3  h-full overflow-y-scroll p-4">
        {<Left />}
      </div>
      <div className="w-full lg:w-1/3 h-full overflow-y-scroll px-5 py-4">
        {<Center />}
      </div>
      <div className="w-full lg:w-1/3 h-full overflow-y-scroll p-4 flex items-center justify-center">
        {<Right />}
      </div>
    </div>
  );
};

export default Layout;
