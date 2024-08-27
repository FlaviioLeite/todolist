import React from 'react';
import Avatar from '../../assets/images/Avatar.jpeg';

const About: React.FC = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <img src={Avatar} alt="Avatar" style={{ borderRadius: '50%', width: '150px' }} />
            <h1>Flavio Emanuel Leite Pinto</h1>
            <h2>Engenheiro de software</h2>
            <p>
              Eu sou o Flavio Emanuel Leite Pinto, estudante de Engenharia de
             Software no Centro Universitário da Fundação Assis Gurgacz, Tenho uma paixão pela tecnologia e estou sempre
              buscando aprender e aplicar novos conhecimentos, Sou uma pessoa motivada por desafios técnicos e estou constantemente
               em busca de oportunidades que me permitam crescer e contribuir para projetos inovadores. Estou sempre em aprendizado contínuo, o que me ajuda a me adaptar
               rapidamente às novas tecnologias e exigências do mercado.
            </p>
            <p>Confira meu GitHub: <a href="https://github.com/FlaviioLeite" target="_blank" rel="noopener noreferrer">FlaviioLeite</a></p>
        </div>
    );
};

export default About;
