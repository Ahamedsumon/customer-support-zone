const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-sm ">
        <div className="navbar  max-w-500 mx-auto">
        
      <div className="navbar-start flex justify-between w-full">
        <a className="text-xl cursor-pointer">CS — Ticket System</a>
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
        
            <div className="navbar-end">
              <button className="btn bg-linear-to-l font-bold from-[#9F62F2] to-[#632EE3] text-white lg:hidden"><span>{<i className="fa-solid fa-plus"></i>}</span>New Ticket</button>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
        </div>

        {/* <a className="text-xl cursor-pointer">CS — Ticket System</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Changelog</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Download</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      
        <button className="btn bg-linear-to-l font-bold from-[#9F62F2] to-[#632EE3] text-white hidden lg:block"><span>{<i className="fa-solid fa-plus"></i>}</span> New Ticket</button>
     
      </div>
    </div>
  );
};

export default Navbar;
