import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faAdd,
  faArrowsRotate,
  faCircleArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <>
      <aside className="left-sidebar bg-[#1DA1F2] fixed left-0 flex flex-col w-1/5 h-screen text-white">
        <div className="px-4 py-8 flex flex-col items-center justify-evenly gap-4">
          <img
            src="/logo192.png"
            alt="profile"
            className="bg-white w-20 h-20 border rounded-full"
          />
          <h6 className="font-bold">Memphis Depay</h6>
          <p className="text-center text-sm text-slate-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nobis
            asperiores porro non accusantium ex quidem modi delectus, velit
            corporis fugit quo vel soluta tempore. Ratione a nemo repellat nam?
          </p>
          <a href="/">
            <FontAwesomeIcon icon={faLink} /> www.memphis.com
          </a>
          <button className="bg-[#657786] px-12 py-3 text-sm rounded-3xl">
            Follow
          </button>
        </div>
        {/* <div className="bg-slate-400 flex flex-row flex-wrap">
          <img src="/logo192.png" alt="img" className="w-[33.3%]" />
          <img src="/logo192.png" alt="img" className="w-[33.3%]" />
          <img src="/logo192.png" alt="img" className="w-[33.3%]" />
          <img src="/logo192.png" alt="img" className="w-[33.3%]" />
          <img src="/logo192.png" alt="img" className="w-[33.3%]" />
          <img src="/logo192.png" alt="img" className="w-[33.3%]" />
          <img src="/logo192.png" alt="img" className="w-[33.3%]" />
          <img src="/logo192.png" alt="img" className="w-[33.3%]" />
          <img src="/logo192.png" alt="img" className="w-[33.3%]" />
        </div> */}
        <div className="p-4">
          <h5 className="font-medium text-2xl">Activities</h5>
          <div>
            <span className="flex flex-row flex-wrap items-center gap-1">
              <FontAwesomeIcon icon={faAdd} className="px-4" />
              <p className="text-slate-700 font-semibold">Eugene</p>
              <a className="underline" href="/">
                Eugene
              </a>
            </span>
          </div>
          <div>
            <span className="flex flex-row flex-wrap items-center gap-1">
              <FontAwesomeIcon icon={faCircleArrowRight} className="px-4" />
              <p className="text-slate-700 font-semibold">Eugene</p>
              <a className="underline" href="/">
                Eugene
              </a>
            </span>
          </div>
          <div>
            <span className="flex flex-row flex-wrap items-center gap-1">
              <FontAwesomeIcon icon={faArrowsRotate} className="px-4" />
              <p className="text-slate-700 font-semibold">Eugene</p>
              <a className="underline" href="/">
                Eugene
              </a>
            </span>
          </div>
          <div>
            <span className="flex flex-row flex-wrap items-center gap-1">
              <FontAwesomeIcon icon={faArrowsRotate} className="px-4" />
              <p className="text-slate-700 font-semibold">Eugene</p>
              <a className="underline" href="/">
                Eugene
              </a>
            </span>
          </div>
          <div>
            <span className="flex flex-row flex-wrap items-center gap-1">
              <FontAwesomeIcon icon={faStar} className="px-4" />
              <p className="text-slate-700 font-semibold">Eugene</p>
              <a className="underline" href="/">
                Eugene
              </a>
            </span>
          </div>
        </div>
      </aside>

      <aside className="right-sidebar bg-white w-1/5 h-screen p-6 fixed right-0 border">
        <div className=" mb-4">
          <h4 className="text-xl mb-4">Philippines Trends</h4>
          <ul className="text-sm text-[#1DA1F2]">
            <li>
              <a href="/">#Hello world</a>
            </li>
            <li>
              <a href="/">#Hello world</a>
            </li>
            <li>
              <a href="/">#Hello world</a>
            </li>
            <li>
              <a href="/">#Hello world</a>
            </li>
            <li>
              <a href="/">#Hello world</a>
            </li>
            <li>
              <a href="/">#Hello world</a>
            </li>
            <li>
              <a href="/">#Hello world</a>
            </li>
            <li>
              <a href="/">#Hello world</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <h4 className="text-xl mb-4">Who to follow</h4>
            <a href="/" className="text-[#1DA1F2]">
              More
            </a>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <img
                className="w-12 h-12 mx-2 rounded-full"
                src="/logo192.png"
                alt="avatar"
              />
              <div>
                <h6 className="font-semibold">Jack Reacher</h6>
                <p className="text-xs text-gray-400">Designer, Blogger</p>
              </div>
            </div>
            <FontAwesomeIcon icon={faAdd} className="border p-1" />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <img
                className="w-12 h-12 mx-2 rounded-full"
                src="/logo192.png"
                alt="avatar"
              />
              <div>
                <h6 className="font-semibold">Jack Reacher</h6>
                <p className="text-xs text-gray-400">Designer, Blogger</p>
              </div>
            </div>
            <FontAwesomeIcon icon={faAdd} className="border p-1" />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <img
                className="w-12 h-12 mx-2 rounded-full"
                src="/logo192.png"
                alt="avatar"
              />
              <div>
                <h6 className="font-semibold">Jack Reacher</h6>
                <p className="text-xs text-gray-400">Designer, Blogger</p>
              </div>
            </div>
            <FontAwesomeIcon icon={faAdd} className="border p-1" />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <img
                className="w-12 h-12 mx-2 rounded-full"
                src="/logo192.png"
                alt="avatar"
              />
              <div>
                <h6 className="font-semibold">Jack Reacher</h6>
                <p className="text-xs text-gray-400">Designer, Blogger</p>
              </div>
            </div>
            <FontAwesomeIcon icon={faAdd} className="border p-1" />
          </div>
        </div>
      </aside>
    </>
  );
}
