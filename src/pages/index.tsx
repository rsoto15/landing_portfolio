import Image from 'next/image'
import { Inter } from 'next/font/google'
"use client";
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle,AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai';
import deved from "../../public/self.jpg";
import login from "../../public/login.png";
import table from "../../public/table.png";
import tax1 from "../../public/tax1.png";
import tax2 from "../../public/tax2.png";
import tax3 from "../../public/tax3.png";
import tax4 from "../../public/tax4.png";
import React from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
    <head>
      <title>Roger&apos;s Portfolio</title>
      <meta name="description"></meta>
      <link rel="icon" href='/favicon.ico'/>
    </head>
    <main>
    <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <ul className='flex items-center text-2xl justify-center gap-10 py-5 text-blue-500 ml-auto'>
              <li><a className="bg-blue-500 text-white px-2 py-1 border-none rounded-md ml-8"
                  href="#projects">Projects</a></li>
              <li><a href='https://www.linkedin.com/in/rogelio-soto-1a2349205/'><AiFillLinkedin/></a></li>
              <li><a href='https://github.com/rsoto15'><AiFillGithub/></a></li>
              <li><a href="mailto:example@example.com" target="_blank"><AiFillMail/></a></li>
            </ul>
          </nav>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-10">
              <h1 className="text-base py-2 text-blue-500 font-medium md:text-6xl">
                Software Developer<span className="animate-[wave_5s_ease-in-out_2]">👋🏻</span>
              </h1>
              <p className="text-md py-5 leading-8 text-white md:text-xl max-w-lg">
                Hi, and welcome to my portfolio! As a software developer, I&apos;m excited to
                share my passion for coding and showcase my skills and potential to
                potential employers. My portfolio features projects that demonstrate my
                proficiency in programming languages such as Java, Python, HTML, SQL, and
                JavaScript. I believe that software development is an art as well as a
                science, and my portfolio reflects my creative and analytical approach to
                developing solutions that meet user needs and exceed expectations. Thank
                you for visiting my page, and I look forward to connecting with you!
              </p>
            </div>
            <div className="w-full md:w-1/2 flex-shrink-0">
              <div className="mx-auto bg-gradient-to-b from-blue-500 rounded-full w-96 h-96 relative overflow-hidden mt-40">
                <Image src={deved} layout="fill" objectFit="cover" alt='picture1'/>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

            <div  className='basis-1/3 flex-1'>
              <h3 className="text-5xl py-2 text-blue-500 font-medium md:text-6xl">Student Hub</h3>
              <h4 className='py-4 text-blue-500'>Tools I used:</h4>
              <p className='text-white py-1'>Python - Django Framework, SQLite3, React, Tailwind</p>
              <Image src={login} alt={'picture1'} width={500} height={600} className="py-2 rounded-3xl" />
              <Image src={table} alt={'picture2'} width={500} height={600} className="rounded-3xl py-2" />

            </div>
            <div  className='basis-1/2 flex-1 col-2'>
              <h6 className="text-xl py-2 text-blue-500 font-medium md:text-6xl">Tax Landing Page</h6>
              <h4 className='py-4 text-blue-500'>Tools I used:</h4>
              <p className='text-white py-1'>React, Tailwind CSS</p>
              <p className='text-white py-1'></p>
              <Image src={tax1} alt={'picture3'} width={500} height={600} className="py-2 rounded-3xl" />
              <Image src={tax2} alt={'picture4'} width={500} height={600} className="py-2 rounded-3xl" />
              <Image src={tax3} alt={'picture5'} width={500} height={600} className="py-2 rounded-3xl" />
              <Image src={tax4} alt={'picture6'} width={500} height={600} className="py-2 rounded-3xl" />

            </div>

          </div>
        </section>
      </main>
      </div>
  );
}




