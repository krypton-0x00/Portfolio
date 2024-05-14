import React from "react";

const ReviewCard = () => {
  return (
    <div className="text-white transition-all hover:border-white border md:w-[400px] md:h-auto border-blue-600 px-8 my-12 py-4 mx-10 rounded-xl  ">
      <div className="flex gap-9 items-center">
        <img
          className="rounded-full w-16"
          src="https://source.unsplash.com/150x150/?man"
          alt="img"
        />
        <h1 className="font-bold text-blue-500">Shakir Gulzar</h1>
      </div>
      <div className="">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut sint
        ducimus ad corporis cum commodi ullam dicta mollitia aliquam repudiandae
        voluptate facere quo fuga, molestiae maxime sequi voluptas labore quam!
      </div>
    </div>
  );
};

export default ReviewCard;
