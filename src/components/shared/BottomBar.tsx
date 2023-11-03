import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";
import { Link, NavLink, useLocation } from "react-router-dom";

const BottomBar = () => {
  const { pathname } = useLocation();
  return (
    <section className="bottom-bar">
      {sidebarLinks.map((link: INavLink, index) => {
        const isActive = pathname === link.route;
        return (
          <Link to={link.route} key={index} className={`${isActive ? "bg-primary-500 rounded-[10px]":null} flex-center flex-col gap-1 p-2 transition`}>
            <img src={link.imgURL} width={16} height={16} alt={link.label} className={`group-hover:invert-white ${isActive ? "invert-white":null}`}/>
            <p className="tiny-medium text-light-2">{link.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default BottomBar;
