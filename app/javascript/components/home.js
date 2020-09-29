import Typed from 'typed.js';

const loadDynamicProfileText = () => {
  new Typed('#profile-typed-text', {
    strings: ["Profile"],
    typeSpeed: 80,
    loop: false
    });
}
export {loadDynamicProfileText};

const loadDynamicExperienceText = () => {
  new Typed('#experience-typed-text', {
    strings: ["Experiences"],
    typeSpeed: 80,
    loop: false
    });
}
export {loadDynamicExperienceText};

const loadDynamicSkillText = () => {
  new Typed('#skill-typed-text', {
    strings: ["Skills"],
    typeSpeed: 80,
    loop: false
    });
}
export {loadDynamicSkillText};

const loadDynamicProjectText = () => {
  new Typed('#project-typed-text', {
    strings: ["Projects"],
    typeSpeed: 80,
    loop: false
    });
}
export {loadDynamicProjectText};
