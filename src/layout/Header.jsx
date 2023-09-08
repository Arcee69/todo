import React from "react";

import hamburger from "../assets/icons/hamburger.svg"; 
import avatar from "../assets/icons/avatar.svg";
import settings from "../assets/icons/settings.svg";
import notification from "../assets/icons/notification.svg";


export default function Header() {

  return (
    <div className="w-full h-full bg-[#fff] flex justify-between items-center">
        <div className="flex gap-3">
            <img
                src={hamburger}
                alt="hamburger"
                loading="lazy"
                className="lg:hidden xs:block cursor-pointer"
            />
            <div className=" font-semibold text-left text-[#000] text-2xl xs:hidden lg:block">
                ToDo
            </div>
        </div>
        <div className="flex gap-4 items-center">
            <img
                src={settings}
                alt="avatar"
                loading="lazy"
                className="h-[40px] w-[40px] cursor-pointer"
            />
            <img
                src={notification}
                alt="avatar"
                loading="lazy"
                className="h-[40px] w-[40px] cursor-pointer"
            />
            <img
                src={avatar}
                alt="avatar"
                loading="lazy"
                className="h-[40px] w-[40px] cursor-pointer"
            />
        
        </div>
    </div>
  );
}
