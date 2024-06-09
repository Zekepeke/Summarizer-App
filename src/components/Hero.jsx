import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      

      </nav>

      <h1 className='head_text'>
        Summarize Articles with
        <br className='max-md:hidden' />
        <span className='pink_gradient'> GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify reading, this is an open-source article summarizer
        that transforms articles into short summaries
      </h2>
    </header>
  );
};

export default Hero;