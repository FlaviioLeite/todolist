import React from 'react';
import './styles.css'
const Home: React.FC = () => {
    return (
        
        <div style={{ padding: '20px' }}>
            <h1>Bem-vindo ao ToDoList</h1>
            <p>Um ToDoList é uma ferramenta simples que ajuda a organizar suas tarefas diárias. 
               Você pode adicionar, editar ou remover tarefas conforme necessário. 
               É uma maneira eficaz de gerenciar seu tempo e garantir que todas as suas responsabilidades sejam cumpridas.</p>
            <h2>Como funciona?</h2>
            <p>Para começar, simplesmente adicione uma nova tarefa na lista. 
               Conforme você for completando as tarefas, marque-as como concluídas. 
               Se precisar remover uma tarefa, isso pode ser feito facilmente com um clique.</p>
        </div>
    );
};

export default Home;
