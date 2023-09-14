import React from "react";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";

const Homes = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center">
      <h2
        className="flex justify-center items-center mt-14 font-bold 
text-3xl "
      >
        {" "}
        Blogs
      </h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-7  mt-16">
        <article className="col-span-1 row-span-2 ">
          <Blog1 />
        </article>
        <article className="col-span-1 row-span-1 ">
          <Blog2 />
        </article>
        <article className="col-span-1 row-span-1 "><Blog2/></article>
      </div>
    </div>
  );
};

export default Homes;
