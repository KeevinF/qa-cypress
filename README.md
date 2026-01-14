# 🛒 Swag Labs - Automação de Testes E2E

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Mochawesome](https://img.shields.io/badge/-Mochawesome-%23323330?style=for-the-badge&logo=mocha&logoColor=white)

Este repositório contém a automação de testes End-to-End (E2E) para o e-commerce **Swag Labs** (SauceDemo). O projeto foi desenvolvido utilizando **Cypress**, focando na confiabilidade dos fluxos críticos de autenticação e compra.

## 📹 Evidência de Execução

Confira abaixo a execução completa dos testes, cobrindo os cenários de login (sucesso e erro) e o fluxo de compra ponta a ponta:

[Clique aqui para assistir ao vídeo da execução](./assets/Teste%20Cypress.mp4)

> **Nota:** O vídeo demonstra a validação de diferentes perfis de usuário via Data Driven e o fluxo "Happy Path" de compra.

---

## 🧠 Arquitetura e Padrões

O projeto segue boas práticas de engenharia de software e testes automatizados:


https://github.com/user-attachments/assets/d100583a-4812-43ae-82a4-e8a0c6c0897c


- **Page Object Model (POM):** Encapsulamento dos elementos e ações das páginas (`/page`), garantindo testes mais limpos e de fácil manutenção.
- **Custom Commands:** Abstração de lógicas repetitivas (como o Login) para o arquivo `commands.js`, seguindo o princípio **DRY** (Don't Repeat Yourself) e facilitando a reutilização de código.
- **Data Driven Testing:** Uso de arquivos JSON (`/fixtures`) para alimentar os testes com diferentes massas de dados, permitindo a validação de múltiplos cenários com o mesmo código.
- **Relatórios Integrados:** Configuração do **Mochawesome** e **JUnit** para geração de evidências visuais e XML.

## 🧪 Cenários Automatizados

### 🔐 Autenticação (`login.cy.js` & `scenarioslogin.json`)
Validação robusta do formulário de login utilizando injeção de dados:
- [x] **Login com Sucesso:** Acesso com usuário padrão ("Standard User").
- [x] **Usuário Bloqueado:** Validação da mensagem de erro e impedimento de acesso.
- [x] **Credenciais Inválidas:** Testes negativos com senhas ou usuários incorretos.

### 🛍️ Jornada de Compra (`buy.cy.js` & `scenariosbuy.json`)
Cobertura do fluxo "Happy Path" e validações de interface:
- [x] Adição de múltiplos produtos ao carrinho (Backpack e T-Shirt).
- [x] Validação de redirecionamento de URLs (`/inventory.html`, `/cart.html`).
- [x] Conferência de itens no carrinho.
- [x] Início do processo de checkout (`/checkout-step-one.html`).
- [x] **Evidências:** Captura automática de screenshots em etapas chave.

## 📂 Estrutura do Projeto

```text
📦 qa-cypress
 ┣ 📂 assets          # Evidências de execução (Vídeos/Imagens)
 ┣ 📂 cypress
 ┃ ┣ 📂 e2e           # Especificações dos testes (Specs)
 ┃ ┣ 📂 fixtures      # Massas de dados (JSON) para Data Driven
 ┃ ┣ 📂 page          # Classes Page Objects (Mapeamento de elementos)
 ┃ ┣ 📂 reports       # Relatórios HTML e XML gerados
 ┃ ┗ 📂 support       # Comandos customizados (Login) e configs globais
 ┣ 📜 cypress.config.js # Configurações do framework e relatórios
 ┗ 📜 package.json      # Dependências e scripts

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🚀 Como executar
Pré-requisitos
 * Node.js (v12 ou superior)

 * Git
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Bash

# Clone o repositório
git clone [https://github.com/KeevinF/qa-cypress.git](https://github.com/KeevinF/qa-cypress.git)

# Acesse a pasta
cd qa-cypress

# Instale as dependências
npm install


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Rodando os Testes
Modo Headless (Terminal): Executa todos os testes no navegador Chrome em segundo plano.

Bash

npm run cy:run:chrome


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Modo Interativo: Abre a interface do Cypress para acompanhar a execução em tempo real.

Bash

npx cypress open
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📊 Relatórios de Teste
O projeto gera relatórios detalhados após cada execução. Para visualizar:

 1. Rode os testes via terminal.

 2. Acesse a pasta cypress/reports/html.

 3. Abra o arquivo index.html no seu navegador para ver gráficos, tempo de execução e screenshots de falhas.


                                                                                                                                                                                                                                     ** Desenvolvido por Kevin Fernando**
