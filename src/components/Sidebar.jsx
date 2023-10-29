import Avatar from '../img/IMG_20231024_114650_742.jpg';

import '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';


const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Lucas Pilati" />
        <p className="title">Desenvolvedor Front-End</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="https://github.com/Pilatis" className="btn">
            Ver Perfil
        </a>
    </aside>
};

export default Sidebar;