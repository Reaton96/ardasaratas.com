"use client"
import Image from "next/image";
import { Inter } from 'next/font/google'

import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
const inter = Inter({ subsets: ['greek'] })

export default function Home() {
  const [name, setName] = useState('')
  return (
    <main className={inter.className}>


      <h1 className="text-[#2f7fdb] font-bold">𝕬𝖗𝖉𝖆 𝕾𝖆𝖗𝖆𝖙𝖆𝖘̧</h1>
      <p className="text-orange-700">İnstagram</p>

      <div className=" w-28 flex justify-center">

        <a target="_blank" href="https://www.instagram.com/ardasaratas0/" >
          <FaInstagram size={100} />

        </a>
      </div>

    </main>
  );
} 
