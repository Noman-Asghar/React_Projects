import React from 'react'
import aboutImg from '/rabbit-hero.webp'
 
const About = () => {
  return (
    <div>
      <div className="w-full p-[20px] lg:py-[100px] flex justify-around items-center flex-wrap lg:flex-row flex-col  ">
        <div className="lg:w-1/3 w-full">
            <img src={aboutImg} alt="" className='rounded-xl'/>
        </div>
        <div className="lg:w-1/2 w-full">
            <h1 className='text-[50px] py-2'>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corrupti natus, illo laborum earum adipisci odit repellendus expedita vel! Eum, ex iste! Vel optio doloribus, maiores quidem autem alias minima. Nemo non numquam, sed dolorem temporibus molestias quos neque maiores deleniti velit recusandae quod repellat nulla, veniam omnis tempore dolor fugiat. Alias asperiores labore consequuntur debitis repudiandae, voluptatum porro sint. Ut laborum doloribus molestias voluptate necessitatibus quidem quo reiciendis ullam eum facilis nostrum natus, laudantium commodi deleniti saepe voluptatibus optio adipisci possimus sapiente animi. Ullam autem fugit unde eius quibusdam aperiam? Qui quaerat quia natus obcaecati itaque ipsum omnis quas!</p>
        </div>
      </div>
    </div> 
  )
}

export default About
