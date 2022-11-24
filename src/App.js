
import axios from "axios";
import React, { useCallback } from "react";
import "./App.css";
import { Auth, URL_BASE } from './service/api';


function App() {

  const getTagsByWorkspace = useCallback(() => {
    axios
      .get(`${URL_BASE}/workspaces/1202132793144432/tags`, Auth)
      .then((response) => {console.log(response.data.data);})
      .catch((erro) => {alert.console.log(erro);});
  }, []);

  const createNewTag = useCallback(() => {
    axios
    .post(
      "https://app.asana.com/api/1.0/tags", 
      {              
        data: {
          color: "light-green",
          followers: [],
          name: "tag do Rafa",
          notes: "primeiro teste tag",
          workspace: "1202132793144432",
        },
      },
      Auth
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });  
    
  }, []);

  const upDateTag = useCallback(() => {
    axios.put(
      `${URL_BASE}/tags/1203431427975023`,
      {   
        data: {
          color: "dark-green",
          name: "tag Rafael",        
        }, 
      },
      Auth
    )
    .then((res) => {
      console.timeLog(res);
    })
    .catch((err) => {
      console.log(err);    
    });  
  }, []);

  const deleteTag = useCallback(() => {
    axios
      .delete(`${URL_BASE}/tags/1203431427975023`, Auth)
      .then((res) => {console.log(res);})
      .catch((err) => {console.log(err);});
  }, []);

  return (
    <div className="main">
      <button onClick={getTagsByWorkspace}>buscar tags</button>
      <button onClick={createNewTag}>Criar nova tag</button>
      <button onClick={upDateTag}>Atualizar tag</button>
      <button onClick={deleteTag}>deletar tag</button>
    </div>
  );
}

export default App;
