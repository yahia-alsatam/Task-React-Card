import logo from "../assets/img/logo.png";

const NavBar = () => {
  return (
    <>
      {/* Start of the navbar */}
      <div className="NavBar bg-white flex justify-around items-center h-[75px]  xxs_custom:justify-around  ">
        <img className="w-28 pt-2 hidden xs_custom:block" src={logo} alt="" />

        <div>
          <ul className="flex justify-between gap-12">
            <a href="">
              <li className="text hover:text-teal-600  ">Home</li>
            </a>
            <a href="">
              <li className="text hover:text-teal-600 hidden xxs_custom:block">
                Services
              </li>
            </a>
            <a href="">
              <li className="text hover:text-teal-600 hidden sm:block">
                Contact us
              </li>
            </a>
          </ul>
        </div>
        <div className="flex ">
          <button
            type="button"
            className="button text text-gray-900 bg-teal-300 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-2"
          >
            Login
          </button>
          <button
            type="button"
            className="button text text-gray-900  bg-teal-300 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-2"
          >
            Sign in
          </button>
        </div>
      </div>
      {/* End of the navbar */}
    </>
  );
};

export default NavBar;
