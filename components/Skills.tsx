"use client";
import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'

interface Props {
    
}

const Skills = (props: Props) => {
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className='flex relative flex-col text-center md:text-center xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y- mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center ml-6'>
                Skills
            </h3>
            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm '>
                Hover over a skill for currency profienciency
            </h3>
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
                <Skill directionLeft={false} percentage={90} logo='https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png' />
                <Skill directionLeft={false} percentage={90} logo='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png' />
                <Skill directionLeft={false} percentage={95} logo='https://cdn.sanity.io/images/ltuexkre/production/5ca925937ccd56e069dd6f7cf8c5c7853542603f-500x500.png' />
                <Skill directionLeft={false} percentage={80} logo='https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png' />
                <Skill directionLeft={false} percentage={90} logo='https://cdn.sanity.io/images/ltuexkre/production/df2fb90aec55dc3d8df7544efeb4a476508b0029-500x500.png' />
                <Skill directionLeft={false} percentage={90} logo='https://cdn.sanity.io/images/ltuexkre/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png' />
                <Skill directionLeft={true} percentage={90} logo='https://cdn.sanity.io/images/ltuexkre/production/19a30950e8bb4ce1c2155bde79a02626202b173c-500x500.png' />
                <Skill directionLeft={true} percentage={100} logo='https://cdn.sanity.io/images/ltuexkre/production/da55259f760c8c5606b1cab6e6a9f61bbc60bf0d-500x500.png' />
                <Skill directionLeft={true} percentage={95} logo='https://i.ibb.co/SX0cmdX/pngwing-com.png'/>
                <Skill directionLeft={true} percentage={85} logo='https://i.ibb.co/Jx9BH1v/pngegg.png'/>
                <Skill directionLeft={true} percentage={85} logo='https://i.ibb.co/2vtkhDh/pngwing-com-1.png' />
                <Skill directionLeft={true} percentage={90} logo='https://i.ibb.co/9pVxtN3/framer-motion-seeklogo-com.png'/>
            </div>
            
        </motion.div>
    )
}

export default Skills
