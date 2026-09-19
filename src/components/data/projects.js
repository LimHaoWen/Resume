import Laksa from "/src/images/Laksa.webp";
import Attendance from "/src/images/Attendance.png";
import Cat from "/src/images/Ragdoll.jpeg";
import Street from "/src/images/Street.jpeg";
import Corgi from "/src/images/Corgi.jpeg";

export const projects = [
  {
    src: Laksa,
    link: "https://github.com/LimHaoWen/JLW",
    description: "Family business app for selling laksa, featuring a loyalty points system",
  },
  {
    src: Attendance,
    link: "https://github.com/LimHaoWen/attendance-app",
    description: "Attendance app that supports export/import of attendance lists",
  },
  {
    src: Cat,
    link: "https://www.google.com.sg/?safe=active&ssui=on",
    description: "To be filled",
  },
  {
    src: Street,
    link: "https://www.google.com.sg/?safe=active&ssui=on",
    description: "To be filled",
  },
  {
    src: Corgi,
    link: "https://www.google.com.sg/?safe=active&ssui=on",
    description: "To be filled",
  },
];

// Max drag translation (%) per viewport-width breakpoint, keyed ascending.
// "fit" measures the track so the last card stops flush with the right edge.
export const carouselClamps = {
  1280: "fit",
  1440: -74,
  1700: -56.5,
  3000: -47,
};
