import {  FaPlus } from "react-icons/fa6";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { RiMore2Fill } from "react-icons/ri";

const Tooltip = ({handleDelete, id}) => {
  return (
    <div className="group/btn">
      <div className="absolute motion-safe:animate-pulse hidden transition-transform ease-in-out shadow-lg shadow-gray-400/35 group-hover/btn:flex group-hover/btn:-translate-y-20   bg-gray-100 p-3 rounded-3xl">
        <div className="tooltip-container flex items-center justify-center gap-3">
          <div className="group/tooltip p-2 bg-gray-50 rounded-full shadow-md shadow-gray-200 hover:bg-gray-700 hover:text-gray-50">
            <span className="sr-only">add</span>
            <a href="#">
              <span className="">
                <FaPlus className="fill-gray-700 group-hover/tooltip:fill-gray-50 ease-in-out duration-300 transition-colors w-[26px] h-[26px]"/>
              </span>
            </a>
          </div>
          <div className="bg-gray-50 shadow-md shadow-gray-200 group/tooltip p-2 rounded-full hover:bg-sky-500 hover:text-gray-50">
            <span className="sr-only">edit</span>
            <MdEdit className="fill-gray-700 group-hover/tooltip:fill-gray-50 ease-in-out duration-300 transition-colors w-[26px] h-[26px]" />
          </div>
          <button onClick={()=>handleDelete(id)} className="bg-gray-50 shadow-md shadow-gray-200 group/tooltip p-2 rounded-full hover:bg-red-500 hover:text-gray-50">
            <span className="sr-only">delete</span>
            <MdDeleteForever className="fill-gray-700 group-hover/tooltip:fill-gray-50 ease-in-out duration-300 transition-colors w-[26px] h-[26px]"/>
          </button>
        </div>
        <div className="absolute left-0 w-full bg-transparent z-50 h-4 -bottom-4" />
        <div className="absolute -bottom-2  h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-100" />
      </div>
      <div className="relative border-4  border-gray-200 bg-gradient-to-r from-black/40 to-gray-400 p-1 rounded-full group-hover/btn:from-violet-800 group-hover/btn:to-indigo-800 transition-all duration-300 ease-in-out shadow-gray-300/50 shadow-xl hover:cursor-pointer group/item  flex items-center justify-center group-hover/btn:scale-110 group-hover/btn:-translate-y-1">
        <button className="gap-1 flex w-full justify-center items-center">
          <RiMore2Fill className="w-6 h-6 text-gray-100 dark:text-white group-hover/btn:rotate-180  ease-in-out transition-transform duration-300"/>
        </button>
      </div>
    </div>
  );
}

export default Tooltip;
