import "./style.css";
/* Import af Motion One bibliotek */
import {
  animate,
  stagger,
  inView,
  scroll,
  timeline,
} from "motion";

animate(
  ".staggeranimation div",
  { opacity: [0, 1] },
  {
    delay: stagger(0.5, { start: 0.1 }),
  }
);

inView(
  animate(
    ".up_down",
    {
      translateY: [-300, 300, -300],
    },
    {
      duration: 6,
      repeat: Infinity,
    }
  )
);

const items = document.querySelectorAll(
  "#horisontalliste li"
);
scroll(
  animate("#horisontalliste", {
    transform: [
      "none",
      `translateX(-${
        items.length - 1
      }00vw)`,
    ],
  }),
  {
    target: document.querySelector(
      "#horisontalscrollsection"
    ),
  }
);

scroll(
  animate(".progress-bar", {
    scaleX: [0, 1],
  })
);

document
  .querySelectorAll(".intro_para")
  .forEach((intro_para) => {
    const header =
      intro_para.querySelector("p");
    scroll(
      animate(header, {
        y: [-1000, 300],
      }),
      {
        target: header,
      }
    );
  });

const lillevideo =
  document.querySelector("#videofil");
lillevideo.pause();
scroll(
  ({ y }) => {
    if (!lillevideo.readyState) return;
    lillevideo.currentTime =
      lillevideo.duration * y.progress;
  },
  {
    target:
      document.querySelector(".glitch"),
    offset: ["-800vh", "end end"],
  }
);
document
  .querySelectorAll(".del2_para")
  .forEach((del2_para) => {
    const header =
      del2_para.querySelector("p, h3");
    scroll(
      animate(header, {
        y: [1000, -1000],
        opacity: [0, 2, 2, 0.5, 0],
        scale: [1, 1.5, 1, 0.5, 0],
      }),
      {
        target: header,
      }
    );
  });

document
  .querySelectorAll(".del3_para")
  .forEach((del3_para) => {
    const header =
      del3_para.querySelector(
        "p, button"
      );
    scroll(
      animate(header, {
        y: [-800, 700],
        scale: [1.5, 1],
      }),
      {
        target: header,
      }
    );
  });

document
  .querySelectorAll(".citat")
  .forEach((citat) => {
    const header =
      citat.querySelector("p");
    scroll(
      animate(header, {
        scale: [2.5, 0],
      }),
      {
        target: header,
      }
    );
  });

document
  .querySelectorAll("filler")
  .forEach((filler) => {
    const fill =
      filler.querySelector("fill");
    scroll(
      animate(fill, { y: [-400, 400] }),
      {
        target: fill,
      }
    );
  });
