import { sidebarConfigs } from '@/configs/sidebar'
import React from 'react'
import GroupTitle from './GroupTitle';
import SidebarButton from './SidebarButton';

const Sidebar = () => {
	return (
		<div className='w-48 bg-blossom-100 h-full flex flex-col py-4 px-4 items-center gap-y-6'>
			<h1 className='font-poppins text-blossom-700 font-bold text-3xl'>Celestial</h1>
			<div className='w-2/4 bg-blossom-700 h-[1px] rounded-xl' />

			{sidebarConfigs.map((element) => {

				switch (element.type) {
					case 'group':
						return <GroupTitle key={element.label} title={element.label} />
					case 'navigationButton':
						return <SidebarButton key={element.label} label={element.label} path={element.path || ''}/>

					default:
						break;
				}
			})}
		</div>
	)
}

export default Sidebar
