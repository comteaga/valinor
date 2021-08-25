# Buscador de repositórios

![GitHub repo size](https://img.shields.io/github/repo-size/comteaga/valinor?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/top/comteaga/valinor?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/comteaga/valinor?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/github/issues/comteaga/valinor?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/github/issues-pr/comteaga/valinor?style=for-the-badge)

> O projeto é uma aplicação web de busca a repositórios no Github, desenvolvida em React com Typescript. A aplicação permite ordenar os resultados da busca por melhor match, mais ou menos estrelas, mais ou menos forks, e por atualização mais ou menos recente.É possível filtrar os resultados incluindo ou exibindo somente repositórios fork.

### Ajustes e melhorias

O projeto encontra-se em desenvolvimento seguindo o seguinte fluxo:

- [x] Criação da página
- [x] Integração com a API do Github
- [x] Migração para Typescript
- [x] Componentização
- [x] Aperfeiçoamento do layout responsivo
- [ ] Testes

## ☕ Usando o Buscador de repositórios

Exemplo de utilização da aplicação desktop:

<p>
  <img src="src/assets/desktop.gif" width="800px" />
</p>

Exemplo de utilização mobile:

<p>
  <img src="src/assets/mobile.gif" height="500px" />
</p>

Para cada repositório listado é exibido o nome do proprietário / nome do repositório, a descrição, número de estrelas, forks e issues abertas (todos com os respectivos links no Github).

A aplicação também exibe o tamanho do repositório (KB ou MB), a linguagem mais usada no projeto, o tipo de licença, a data de criação e a data da última atualização.
