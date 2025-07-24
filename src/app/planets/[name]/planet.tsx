"use client";
import data from "../../../../data.json";
import Link from "next/link";
import "./planet.css";

import Image from "next/image";
const planets: Planet[] = data;
type PageType = "overview" | "structure" | "geology";
import { useState } from "react";

export const Planet = ({ name }: { name: string }) => {
  const currentPlanet = planets.find((planet) => {
    if (name.toLowerCase() === planet.name.toLowerCase()) {
      return planet;
    }
  });
  const buttonStyle =
    "border-solid border-1 border-white pt-2 pb-2 pr-3 pl-3 m-1 w-80";

  const [currentPage, setCurrentPage] = useState<PageType>("overview");
  if (!currentPlanet) return <>Planet not found</>;
  const changePage = (page: PageType) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-between flex-col h-125">
      <div className="m-5 flex h-7/11 items-center justify-center">
        <div className="w-1/2 flex flex-col items-center justify-center">
          {(currentPage === "overview" || currentPage === "geology") && (
            <Image
              src={`${currentPlanet.images["planet"]}`}
              alt={`${currentPlanet.name} image`}
              width={250}
              height={250}
            />
          )}
          {currentPage === "structure" && (
            <Image
              src={`${currentPlanet.images["internal"]}`}
              alt={`${currentPlanet.name} image`}
              width={250}
              height={250}
            />
          )}
          {currentPage === "geology" && (
            <Image
              src={`${currentPlanet.images["geology"]}`}
              alt={`${currentPlanet.name} image`}
              width={100}
              height={100}
              className="absolute bottom-30 right-182"
            />
          )}
        </div>
        <div className="w-1/4 h-full flex flex-col items-start justify-center">
          <h1 className="planet-header">{currentPlanet.name}</h1>
          <p>{currentPlanet[currentPage]["content"]}</p>
          <p>
            Source
            <Link href={currentPlanet[currentPage]["source"]}> Wikipedia</Link>
          </p>
          <div className="self-center">
            <button
              className={`${
                currentPage === "overview"
                  ? `${currentPlanet.name.toLowerCase()} `
                  : ""
              }${buttonStyle}`}
              onClick={() => changePage("overview")}
            >
              Overview
            </button>
          </div>
          <div className="self-center">
            <button
              className={`${
                currentPage === "structure"
                  ? `${currentPlanet.name.toLowerCase()} `
                  : ""
              }${buttonStyle}`}
              onClick={() => changePage("structure")}
            >
              Internal Structure
            </button>
          </div>
          <div className="self-center">
            <button
              className={`${
                currentPage === "geology"
                  ? `${currentPlanet.name.toLowerCase()} `
                  : ""
              }${buttonStyle}`}
              onClick={() => changePage("geology")}
            >
              Geology
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around">
        <div className="info-container">
          <p>ROTATION TIME</p>
          <p>{currentPlanet.rotation.toUpperCase()}</p>
        </div>
        <div className="info-container">
          <p>REVOLUTION TIME</p>
          <p>{currentPlanet.revolution.toUpperCase()}</p>
        </div>
        <div className="info-container">
          <p>RADIUS</p>
          <p>{currentPlanet.radius.toUpperCase()}</p>
        </div>
        <div className="info-container">
          <p>AVERAGE TEMP</p>
          <p>{currentPlanet.temperature.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};
