import Typed from 'typed.js';

const loadDynamicProfileText = () => {
  new Typed('#profile-typed-text', {
    strings: ["Profil"],
    typeSpeed: 80,
    loop: false
    });

}
export {loadDynamicProfileText};

const loadDynamicExperienceText = () => {
  new Typed('#experience-typed-text', {
    strings: ["Expériences"],
    typeSpeed: 80,
    loop: false
    });
}
export {loadDynamicExperienceText};

const loadDynamicSkillText = () => {
  new Typed('#skill-typed-text', {
    strings: ["Acquis"],
    typeSpeed: 80,
    loop: false
    });
}
export {loadDynamicSkillText};

const loadDynamicProjectText = () => {
  new Typed('#project-typed-text', {
    strings: ["Réalisations"],
    typeSpeed: 80,
    loop: false
    });
}
export {loadDynamicProjectText};


