"use client";

import Image from "next/image";
import "./globals.css";
import HeroBg from "@/assets/images/fury-bg-1.jpg";
import { HiOutlineTicket } from "react-icons/hi";
import StarDisplay from "@/components/StarDisplay";
import { ThisWeekMovies } from "@/utils/Data";
import React, { useState } from "react";

const Home = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardSelect = (num) => {
    setActiveCard(parseInt(num));
  };

  return (
    <main className="heroContainer">
      <section className="absolute top-0 left-0 overflow-hidden w-full h-screen">
        {ThisWeekMovies.map((item, index) => (
          <React.Fragment key={index}>
            {activeCard === index && (
              <Image
                className="object-cover w-full h-full"
                src={item.bg}
                alt="helo-bg"
              />
            )}
          </React.Fragment>
        ))}
      </section>

      <section className="flex min-w-full justify-between items-end z-[3]">
        {ThisWeekMovies.map((items, index) => (
          <React.Fragment key={index}>
            {activeCard === index && (
              <section className="flex flex-col gap-8">
                <header className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="flex flex-col ite gap-4 -ml-1 items-center">
                      <h1 className="text-[7.5rem] leading-[0.8]">13</h1>
                      <StarDisplay stars={items.stars} />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h1 className="flex flex-col items-start gap-2 text-6xl font-bold">
                        {items.name}
                        <div className="flex justify-center items-center gap-2 text-xl font-semibold">
                          Genre:
                          {items.genre.map((item, index) => (
                            <p className="font-light text-base" key={index}>
                              {item}
                            </p>
                          ))}
                        </div>
                      </h1>
                    </div>
                  </div>
                </header>
                <div className="flex flex-col items-start gap-3">
                  <h2 className="text-white text-sm">Session schedule</h2>
                  <div className="flex gap-3">
                    <p className="px-3 py-1 text-xs rounded-full border-[1px] border-white cursor-pointer">
                      7:30
                    </p>
                    <p className="px-3 py-1 text-xs rounded-full border-[1px] border-white">
                      10:30
                    </p>
                  </div>
                </div>
                <footer className="flex gap-8">
                  <button className="primaryBtn">
                    <HiOutlineTicket />
                    Book Now
                  </button>
                  <button className="secondaryBtn">More info</button>
                </footer>
              </section>
            )}
          </React.Fragment>
        ))}

        <section className="flex gap-4 w-[55%] overflow-hidden">
          {ThisWeekMovies.map((item, index) => (
            <div
              key={index}
              className="cardContainer"
              onClick={() => handleCardSelect(index)}
            >
              <Image
                src={item.dp}
                className="object-cover h-full w-full rounded-[5px]"
              />
            </div>
          ))}
        </section>
      </section>
    </main>
  );
};

export default Home;
