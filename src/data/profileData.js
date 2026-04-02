// Импорт иконок
import reactIcon from '@/assets/images/icons/react.svg';
import wordpressIcon from '@/assets/images/icons/wordpress.svg';
import htmlIcon from '@/assets/images/icons/html5.svg';
import pugIcon from '@/assets/images/icons/pug.svg';
import njkIcon from '@/assets/images/icons/nunjucks.svg';
import cssIcon from '@/assets/images/icons/css3.svg';
import stylusIcon from '@/assets/images/icons/stylus.svg';
import jsIcon from '@/assets/images/icons/js.svg';
import jqIcon from '@/assets/images/icons/jquery.svg';
import bootstrapIcon from '@/assets/images/icons/bootstrap.svg';
import gitIcon from '@/assets/images/icons/git.svg';
import gearIcon from '@/assets/images/icons/gear.svg';

export const profile = {
    name: "Иван",
    role: "Frontend Developer",
    contacts: [
        { type: "telegram", label: "Telegram:", link: "https://t.me/mrjohnny69", text: "@mrjohnny69", },
        { type: "github", label: "GitHub:", link: "https://github.com/mrjohnny-code", text: 'mrjohnny-code', },
        { type: "hhru", label: "Резюме:", link: "https://hh.ru/resume/a21b45abff0e63b3cf0039ed1f716d397a4336", text: "hh.ru", },
    ],
    skills: [
        { name: "React - хуки, состояния, компоненты, маршруты", icon: reactIcon },
        { name: "WordPress - темы, шаблоны, CPT, ACF, хуки", icon: wordpressIcon },
        { name: "HTML (БЭМ)", icon: htmlIcon },
        { name: "PUG", icon: pugIcon },
        { name: "Nunjucks", icon: njkIcon },
        { name: "CSS/SASS/SCSS (Flex, Grid)", icon: cssIcon },
        { name: "Stylus", icon: stylusIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "jQuery", icon: jqIcon },
        { name: "Bootstrap", icon: bootstrapIcon },
        { name: "Git", icon: gitIcon },
        { name: "Gulp/Webpack/Vite", icon: gearIcon }
    ]
};