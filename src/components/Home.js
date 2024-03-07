import { useState } from "react";
import Posts from "./Posts";

export default function Home() {
  const [activeSection, setActiveSection] = useState("tweets");

  const handleSectionChange = (param) => {
    setActiveSection(param);
  };

  const buttonStyle =
    "w-1/4 h-max flex flex-col gap-y-3 justify-between items-center";

  return (
    <main className="w-[55%] m-auto h-max text-[#14171A] flex flex-col justify-start items-center pt-12 gap-y-10">
      <div className="top-section w-[100%] h-max p-4 bg-[#F5F8FA] shadow-md flex flex-row justify-between items-end">
        <button
          type="button"
          onClick={() => handleSectionChange("tweets")}
          className={buttonStyle}
        >
          <span>Tweets</span>
          <span>10</span>
        </button>
        <button
          type="button"
          onClick={() => handleSectionChange("photos-videos")}
          className={buttonStyle}
        >
          <span>Photos/Videos</span>
          <span>200</span>
        </button>
        <button
          type="button"
          onClick={() => handleSectionChange("following")}
          className={buttonStyle}
        >
          <span>Following</span>
          <span>200</span>
        </button>
        <button
          type="button"
          onClick={() => handleSectionChange("followers")}
          className={buttonStyle}
        >
          <span>Followers</span>
          <span>200</span>
        </button>
      </div>
      <div className="posts bg-[#F5F8FA] w-[100%] h-[60vh] p-4 border overflow-y-auto">
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
    </main>
  );
}
