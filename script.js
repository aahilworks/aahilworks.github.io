const roles = [
  "Robotics Enthusiast",
  "IoT Developer",
  "Embedded Builder",
  "Future AI Innovator",
];

const roleTarget = document.querySelector("[data-role-switch]");

if (roleTarget) {
  let roleIndex = 0;

  window.setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleTarget.animate(
      [
        { opacity: 1, transform: "translateY(0px)" },
        { opacity: 0, transform: "translateY(8px)" },
      ],
      { duration: 180, fill: "forwards" }
    );

    window.setTimeout(() => {
      roleTarget.textContent = roles[roleIndex];
      roleTarget.animate(
        [
          { opacity: 0, transform: "translateY(-8px)" },
          { opacity: 1, transform: "translateY(0px)" },
        ],
        { duration: 220, fill: "forwards" }
      );
    }, 180);
  }, 2200);
}

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const easterToggle = document.querySelector("[data-easter-toggle]");
const easterPanel = document.querySelector("[data-easter-panel]");
const easterClose = document.querySelector("[data-easter-close]");

if (easterToggle && easterPanel && easterClose) {
  const setOpen = (isOpen) => {
    easterPanel.classList.toggle("is-open", isOpen);
    easterPanel.setAttribute("aria-hidden", String(!isOpen));
  };

  easterToggle.addEventListener("click", () => {
    const willOpen = !easterPanel.classList.contains("is-open");
    setOpen(willOpen);
  });

  easterClose.addEventListener("click", () => setOpen(false));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  });
}
