import stream from "../assets/stream-map.png";
import nba from "../assets/nba-comp.png";
import calc from "../assets/pocket-calc.png";
import wiki from "../assets/wiki.png";

export const projects = [
  {
    title: "StreamScout",
    live: "https://streamscout.app/",
    repo: "https://github.com/timsj/stream-scout",
    imgSrc: stream,
    imgAlt: "streamscout map",
    desc: "This site allows you to view real-time USGS stream flow and gage height data for rivers and streams across the United States. Features include an interactive map to find monitoring sites, chart viewer to visualize data over time, and account creation to save and track favorite sites.",
    tech: [
      "React",
      "Express",
      "Node.js",
      "MongoDB",
      "CSS-in-JS",
      "Authentication",
      "Responsive design",
    ],
  },
  {
    title: "Wiki Palette",
    live: "https://wiki-palette.vercel.app/",
    repo: "https://github.com/timsj/wiki-palette",
    imgSrc: wiki,
    imgAlt: "wiki palette example",
    desc: "This site lets you search for Wikipedia articles, and on article selection, dynamically generates a color palette and background gradient based on the lead article image. It is written in TypeScript and was developed using Vite.",
    tech: ["TypeScript", "React", "CSS-in-JS", "Responsive design"],
  },
  {
    title: "NBA Player Comparison",
    live: "https://nba-player-comp.vercel.app/",
    repo: "https://github.com/timsj/nba-player-comp",
    imgSrc: nba,
    imgAlt: "nba player comparison",
    desc: "A site that lets you search for and compare regular season stats of two NBA players, from 2016 to present. Features light and dark modes that respect system settings, and a custom implementation of the Bulma CSS framework generated using node-sass.",
    tech: ["JavaScript", "HTML", "CSS", "Bulma", "Sass"],
  },
  {
    title: "PocketCalc",
    live: "https://pocket-calc.vercel.app/",
    repo: "https://github.com/timsj/pocket-calc",
    imgSrc: calc,
    imgAlt: "pocket calculator",
    desc: "A simple calculator app for the web, written in TypeScript. The site is designed to be responsive for ease of use on mobile devices with touch input, and features light and dark modes that respect system settings.",
    tech: ["TypeScript", "HTML", "CSS", "Responsive design"],
  },
];
