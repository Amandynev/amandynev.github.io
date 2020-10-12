import Typed from 'typed.js';

const loadDynamicProfileText = () => {
  new Typed('#profile-typed-text', {
    strings: [I18n.t('js.profile')],
    typeSpeed: 80,
    loop: false
    });

}
export {loadDynamicProfileText};

const loadDynamicExperienceText = () => {
  new Typed('#experience-typed-text', {
    strings: [I18n.t('js.experience')],
    typeSpeed: 80,
    loop: false
    });
}
export {loadDynamicExperienceText};

const loadDynamicSkillText = () => {
  new Typed('#skill-typed-text', {
    strings: [I18n.t('js.skill')],
    typeSpeed: 80,
    loop: false
    });
}
export {loadDynamicSkillText};

const loadDynamicProjectText = () => {
  new Typed('#project-typed-text', {
    strings: [I18n.t('js.projects')],
    typeSpeed: 80,
    loop: false
    });
}
export {loadDynamicProjectText};


