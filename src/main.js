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
    ".overlay",

    {
      opacity: [0, 1, 0],
    },
    {
      duration: 0.5,
    },
    {
      target: document.querySelector(
        ".overlaytrigger"
      ),
    }
  ),
  animate(
    ".exit",
    {
      scaleY: [1, 0],
      translateY: [0, 300],
    },
    {
      duration: 0.5,
      delay: 1.5,
    },
    {
      target: document.querySelector(
        ".overlaytrigger"
      ),
    }
  ),
  animate(
    ".picture",
    {
      opacity: [0, 1],
    },
    {
      duration: 0.5,
      delay: 0.5,
    },
    {
      target: document.querySelector(
        ".overlaytrigger"
      ),
    }
  ),
  animate(
    ".up_down",
    {
      translateY: [-500, 500, -500],
    },
    {
      duration: 10,
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
  },
  animate(
    ".zoom",
    {
      scale: [0, 1],
    },
    {
      duration: 0.2,
    }
  )
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
    offset: ["-100vh", "end end"],
  }
);
document
  .querySelectorAll(".del2_para")
  .forEach((del2_para) => {
    const header =
      del2_para.querySelector("p");
    scroll(
      animate(header, {
        y: [1000, -1000],
        opacity: [0, 2, 2, 0.5, 0],
        scale: [1.5, 1, 0],
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
        scale: [3, 0],
      }),
      {
        target: header,
      }
    );
  });
