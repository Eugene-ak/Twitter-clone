import {
  faArrowAltCircleRight,
  faArrowsRotate,
  faEllipsis,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Posts() {
  return (
    <div className="w-[100%] flex flex-row gap-2 border-b-2 p-2">
      <img src="/logo192.png" alt="avatar" className="w-12 h-12 rounded-full" />
      <span className="w-[100%] right-portion flex flex-col items-start gap-2">
        <div className="w-[100%] flex flex-row items-center justify-between">
          <span>
            <span className="name font-semibold">Memphis Depay</span>
            <span className="handle text-[#AAB8C2]">@memphis</span>
          </span>
          <span className="time">2m</span>
        </div>
        <div className="content text-[#657786]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          sapiente facilis eligendi, architecto illum odit vero molestiae beatae
          corrupti similique quisquam quis, dicta, eaque ad. Fuga commodi
          pariatur officia reprehenderit.
        </div>
        <div className="icons flex flex-row items-center justify-start gap-6 text-[#AAB8C2]">
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faArrowsRotate} />
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
      </span>
    </div>
  );
}
