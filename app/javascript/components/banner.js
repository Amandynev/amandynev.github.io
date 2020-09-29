import Typed from'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Amandyne Verdonck", "Web developer"],
    typeSpeed: 80,
    loop: true
  });
}

export {loadDynamicBannerText};
