import React from "react";
import "./HomeScreen.css";
import authors from "../../authors";
import categories from "../../categories";
import Topics from "../Topics/Topics";
import InstructorsLists from "../Instructors/InstructorsLists/InstructorsLists";
import { FaRegHdd, FaRegCreditCard } from "react-icons/fa";
import { IoIosTabletPortrait, IoLogoGameControllerB } from "react-icons/io";
import { FiDatabase } from "react-icons/fi";
import { AiOutlineFund } from "react-icons/ai";
import { DiNetbeans } from "react-icons/di";

const homeScreen = () => {
  return (
    <div>
      <div className="header2">
        <a>
          {" "}
          <FaRegHdd />
          <span> Development </span>
        </a>
        <a>
          <FaRegCreditCard /> Web Development
        </a>
        <a>
          <DiNetbeans /> Data Science{" "}
        </a>
        <a>
          {" "}
          <IoIosTabletPortrait /> Mobile Apps{" "}
        </a>
        <a>
          {" "}
          <AiOutlineFund />
          Programming Languages{" "}
        </a>
        <a>
          <IoLogoGameControllerB /> Game Development
        </a>
        <a>
          {" "}
          <FiDatabase /> Databases{" "}
        </a>
      </div>
      <Topics topicsList={categories} />
      <InstructorsLists instructorInfo={authors} />
    </div>
  );
};

export default homeScreen;
