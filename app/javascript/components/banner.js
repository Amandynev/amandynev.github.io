import Typed from'typed.js';
import I18n from 'i18n-js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Amandyne Verdonck", "Developer web"],
    typeSpeed: 80,
    loop: true
  });
}

export {loadDynamicBannerText};
