"use client"

import { useRouter } from "next/navigation";

type SidebarButtonProps = {
  label: string,
  icon?: JSX.Element,
  path: string;
}

const SidebarButton = ({ label, icon, path }: SidebarButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path)
  }

  return (
    <button onClick={() => handleClick()} className='flex flex-row w-full h-12 px-2 py-2 bg-blossom-300 border border-blossom-400 rounded-lg text-lg font-poppins font-bold uppercase text-white items-center justify-center hover:bg-blossom-400 hover:border-blossom-500 hover:text-blossom-100'>
      {icon}
      <p>{label}</p>
    </button>
  )
}

export default SidebarButton
