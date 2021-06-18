import gsap from "gsap";

const fadeIn = (container) => {
  return gsap.to(container, { opacity: 1 });
};

export default fadeIn;
