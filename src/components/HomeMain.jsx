import { name } from "/src/config/config.js";

function HomeMain() {
  return (
    <div>
      <div className=" pt-16 flex  items-center gap-8 flex-col-reverse px-12 md:flex-row md:justify-center  ">
        <div>
          <h3 className="font-archivo text-blue-600 md:text-3xl">
            Meet Your Developer
          </h3>
          <h1 className="name font-archivo text-4xl text-white ">{name}</h1>
          <p className="text-sm font-bold text-white py-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            itaque.
          </p>
          <div className="flex">
            <button className="button h-16">
              {" "}
              <a href="/">Contact Me</a>
            </button>
            <button className="transparent-button h-16">
              <a href="/projects">View Projects</a>
            </button>
          </div>
        </div>
        <div className="">
          <img
            className="rounded-xl md:w-auto md:mt-12 "
            src="https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="my dp"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-[90%] mt-12 mb-12" />
      </div>
    </div>
  );
}

export default HomeMain;
