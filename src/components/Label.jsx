import { twMerge } from "tailwind-merge"


export default function Label({className="",icon,text}) {
    
    return <div className={twMerge("w-fit py-2 px-3 rounded-lg border flex gap-x-2 items-center border-gray-800",className)} > {icon} <span className="text-gray-600 font-semibold text-xl">{text}</span></div>;
}