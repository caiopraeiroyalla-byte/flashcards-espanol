// ============================================================
// DADOS: os flashcards, organizados por categoria.
// Cada cartão tem a palavra/frase em espanhol (es) e a tradução
// em português (pt). Para adicionar mais cartões, é só incluir
// mais objetos { es, pt } dentro da categoria desejada.
// ============================================================
const CATEGORIES = [
  {
    id: 'cumprimentos',
    name: 'Cumprimentos',
    cards: [
      { es: 'Hola', pt: 'Olá' },
      { es: 'Buenos días', pt: 'Bom dia' },
      { es: 'Buenas tardes', pt: 'Boa tarde' },
      { es: 'Buenas noches', pt: 'Boa noite' },
      { es: '¿Cómo estás?', pt: 'Como você está?' },
      { es: 'Adiós', pt: 'Tchau / Adeus' },
      { es: 'Por favor', pt: 'Por favor' },
      { es: 'Gracias', pt: 'Obrigado(a)' },
      { es: 'De nada', pt: 'De nada' },
      { es: 'Mucho gusto', pt: 'Prazer em conhecer' },
    ],
  },
  {
    id: 'numeros',
    name: 'Números',
    cards: [
      { es: 'uno', pt: 'um' },
      { es: 'dos', pt: 'dois' },
      { es: 'tres', pt: 'três' },
      { es: 'cuatro', pt: 'quatro' },
      { es: 'cinco', pt: 'cinco' },
      { es: 'seis', pt: 'seis' },
      { es: 'siete', pt: 'sete' },
      { es: 'ocho', pt: 'oito' },
      { es: 'nueve', pt: 'nove' },
      { es: 'diez', pt: 'dez' },
    ],
  },
  {
    id: 'comida',
    name: 'Comida',
    cards: [
      { es: 'agua', pt: 'água' },
      { es: 'pan', pt: 'pão' },
      { es: 'leche', pt: 'leite' },
      { es: 'queso', pt: 'queijo' },
      { es: 'manzana', pt: 'maçã' },
      { es: 'pollo', pt: 'frango' },
      { es: 'arroz', pt: 'arroz' },
      { es: 'huevo', pt: 'ovo' },
      { es: 'café', pt: 'café' },
      { es: 'azúcar', pt: 'açúcar' },
    ],
  },
  {
    id: 'cores',
    name: 'Cores',
    cards: [
      { es: 'rojo', pt: 'vermelho' },
      { es: 'azul', pt: 'azul' },
      { es: 'verde', pt: 'verde' },
      { es: 'amarillo', pt: 'amarelo' },
      { es: 'negro', pt: 'preto' },
      { es: 'blanco', pt: 'branco' },
      { es: 'naranja', pt: 'laranja' },
      { es: 'morado', pt: 'roxo' },
    ],
  },
  {
    id: 'familia',
    name: 'Família',
    cards: [
      { es: 'madre', pt: 'mãe' },
      { es: 'padre', pt: 'pai' },
      { es: 'hermano', pt: 'irmão' },
      { es: 'hermana', pt: 'irmã' },
      { es: 'hijo', pt: 'filho' },
      { es: 'hija', pt: 'filha' },
      { es: 'abuelo', pt: 'avô' },
      { es: 'abuela', pt: 'avó' },
    ],
  },
  {
    id: 'dia-a-dia',
    name: 'Frases do dia a dia',
    cards: [
      { es: '¿Dónde está el baño?', pt: 'Onde fica o banheiro?' },
      { es: 'No entiendo', pt: 'Não entendo' },
      { es: '¿Cuánto cuesta?', pt: 'Quanto custa?' },
      { es: 'Me llamo...', pt: 'Meu nome é...' },
      { es: '¿Qué hora es?', pt: 'Que horas são?' },
      { es: 'Ayúdame', pt: 'Me ajude' },
      { es: 'Hoy', pt: 'Hoje' },
      { es: 'Mañana', pt: 'Amanhã' },
      { es: 'Ayer', pt: 'Ontem' },
    ],
  },
];

const STORAGE_KEY = 'flashcardsEspanolProgress';

// ============================================================
// ESTADO EM MEMÓRIA
// ============================================================
// currentOrder guarda a sequência (possivelmente embaralhada) de
// índices dos cartões da categoria atual.
// currentPosition é a posição dentro dessa sequência.
let currentCategoryId = CATEGORIES[0].id;
let currentOrder = [];
let currentPosition = 0;

// ============================================================
// ELEMENTOS DA PÁGINA
// ============================================================
const categorySelect = document.getElementById('category-select');
const progressIndicator = document.getElementById('progress-indicator');
const flashcard = document.getElementById('flashcard');
const frontText = document.getElementById('front-text');
const backText = document.getElementById('back-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');

// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function getCategoryById(id) {
  return CATEGORIES.find((cat) => cat.id === id) || CATEGORIES[0];
}

// Cria uma sequência [0, 1, 2, ...] com o tamanho da categoria.
function sequentialOrder(length) {
  return Array.from({ length }, (_, i) => i);
}

// Embaralha uma lista de índices (algoritmo de Fisher-Yates).
function shuffleOrder(order) {
  const result = [...order];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function saveProgress() {
  const progress = {
    categoryId: currentCategoryId,
    order: currentOrder,
    position: currentPosition,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    // Se o localStorage não estiver disponível (ex: modo privado),
    // o app continua funcionando, só não salva o progresso.
    console.warn('Não foi possível salvar o progresso:', err);
  }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.warn('Não foi possível carregar o progresso salvo:', err);
    return null;
  }
}

// ============================================================
// RENDERIZAÇÃO
// ============================================================

function renderCategoryOptions() {
  categorySelect.innerHTML = '';
  CATEGORIES.forEach((cat) => {
    const option = document.createElement('option');
    option.value = cat.id;
    option.textContent = cat.name;
    categorySelect.appendChild(option);
  });
  categorySelect.value = currentCategoryId;
}

function renderCurrentCard() {
  const category = getCategoryById(currentCategoryId);
  const cardIndex = currentOrder[currentPosition];
  const card = category.cards[cardIndex];

  frontText.textContent = card.es;
  backText.textContent = card.pt;

  // Sempre volta a mostrar a frente do cartão ao trocar de cartão.
  flashcard.classList.remove('is-flipped');

  progressIndicator.textContent = `Cartão ${currentPosition + 1} de ${category.cards.length}`;
}

// ============================================================
// AÇÕES DO USUÁRIO
// ============================================================

function goToNext() {
  const category = getCategoryById(currentCategoryId);
  currentPosition = (currentPosition + 1) % category.cards.length;
  renderCurrentCard();
  saveProgress();
}

function goToPrevious() {
  const category = getCategoryById(currentCategoryId);
  currentPosition = (currentPosition - 1 + category.cards.length) % category.cards.length;
  renderCurrentCard();
  saveProgress();
}

function shuffleCurrentCategory() {
  currentOrder = shuffleOrder(currentOrder);
  currentPosition = 0;
  renderCurrentCard();
  saveProgress();
}

function switchCategory(categoryId) {
  const category = getCategoryById(categoryId);
  currentCategoryId = category.id;
  currentOrder = sequentialOrder(category.cards.length);
  currentPosition = 0;
  renderCurrentCard();
  saveProgress();
}

function toggleFlip() {
  flashcard.classList.toggle('is-flipped');
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================

function init() {
  renderCategoryOptions();

  const saved = loadProgress();

  if (saved && getCategoryById(saved.categoryId)) {
    const category = getCategoryById(saved.categoryId);
    const validOrder =
      Array.isArray(saved.order) && saved.order.length === category.cards.length;

    currentCategoryId = saved.categoryId;
    currentOrder = validOrder ? saved.order : sequentialOrder(category.cards.length);
    currentPosition =
      typeof saved.position === 'number' &&
      saved.position >= 0 &&
      saved.position < category.cards.length
        ? saved.position
        : 0;
  } else {
    currentOrder = sequentialOrder(getCategoryById(currentCategoryId).cards.length);
    currentPosition = 0;
  }

  categorySelect.value = currentCategoryId;
  renderCurrentCard();

  // Eventos
  flashcard.addEventListener('click', toggleFlip);
  nextBtn.addEventListener('click', goToNext);
  prevBtn.addEventListener('click', goToPrevious);
  shuffleBtn.addEventListener('click', shuffleCurrentCategory);
  categorySelect.addEventListener('change', (e) => switchCategory(e.target.value));
}

init();
