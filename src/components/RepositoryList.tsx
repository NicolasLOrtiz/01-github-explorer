import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

//https://api.github.com/orgs/rocketseat/repos

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  // Armazenar o mesmo tipo de variavel na declaracao e no State
  // useState tem dois retornos
  // o primeiro retorno é a variavel, a segunda é uma funçao para mudara a variavel
  // Imutabilidade
  const [repositories, setRepositories] = useState<Repository[]>([]);

  // Se o array de monitoramento estiver vazio, só executa uma vez
  // Nunca deixar sem o segundo parametro => Loop
  useEffect(() => {
    fetch('https://api.github.com/users/NicolasLOrtiz/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h2>Lista de Repositórios</h2>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  );
}
