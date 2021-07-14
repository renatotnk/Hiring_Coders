import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import {useHistory} from 'react-router-dom';

function App(props) {
  const [usuario, setUsuario] = useState('');
  const history = useHistory();
  const [erro, setErro] = useState(false);

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        //JSON.stringify(respositories)
        repositories.map((repository) => {
          repositoriesName.push(repository.name)
          return 0;
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        setErro(false);
        history.push('./repositories');
    })
      .catch(err => {
        setErro(true);
      });
  }

  return (
    <S.HomeContainer>
      <S.Title>Buscador de repositórios do GitHub</S.Title>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="Usuario" value={usuario} onChange = {e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}> Pesquisar </S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Ocorreu um erro, tente novamente!</S.ErrorMsg> : ""}
    </S.HomeContainer>
  );
}

export default App;
