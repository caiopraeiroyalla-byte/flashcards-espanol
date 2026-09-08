// Servidor simples com Express.
// A unica responsabilidade deste servidor e entregar os arquivos estaticos
// (HTML, CSS, JS) que estao dentro da pasta "public". Toda a logica do app
// (virar cartoes, navegar, salvar progresso) roda no navegador do usuario.

const express = require('express');
const path = require('path');

const app = express();

// Serve tudo que estiver dentro da pasta "public" (index.html, style.css, script.js)
app.use(express.static(path.join(__dirname, 'public')));

// Usa a porta definida pelo servico de hospedagem (ex: Render, Railway),
// ou 3000 como padrao para rodar localmente.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Flashcards Espanol rodando em http://localhost:${PORT}`);
});
