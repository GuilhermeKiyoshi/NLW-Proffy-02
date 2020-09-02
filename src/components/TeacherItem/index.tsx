import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/46085503?s=400&u=7c79c79cf1aba75453c6447c01a6210cadd41016&v=4" alt="Gelinho"/>
            <div>
                <strong>Gelinho</strong>
                <span>Java</span>
            </div>
        </header>

        <p>
            aaaaaaaaaaaaaaa
        </p>

        <footer>
            <p>
                Preço/hora
                <strong> 80,00</strong>
            </p>

            <button type="button">
                <img src={WhatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
        </article>
    );
}
export default TeacherItem;