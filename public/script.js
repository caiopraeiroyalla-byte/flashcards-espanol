// ============================================================
// DADOS: os flashcards, organizados por nível e depois por categoria.
// Cada nível tem suas próprias categorias, e cada cartão tem a
// palavra/frase em espanhol (es) e a tradução em português (pt).
// Para adicionar mais cartões, é só incluir mais objetos { es, pt }
// dentro da categoria desejada, em qualquer nível.
// ============================================================
const LEVELS = [
  {
    id: 'iniciante',
    name: 'Iniciante',
    categories: [
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
    ],
  },
  {
    id: 'mediano',
    name: 'Médio',
    categories: [
      {
        id: 'verbos',
        name: 'Verbos do dia a dia',
        cards: [
          { es: 'Yo como', pt: 'Eu como' },
          { es: 'Tú trabajas', pt: 'Você trabalha' },
          { es: 'Él vive', pt: 'Ele mora' },
          { es: 'Nosotros estudiamos', pt: 'Nós estudamos' },
          { es: 'Ellos tienen', pt: 'Eles têm' },
          { es: 'Yo quiero', pt: 'Eu quero' },
          { es: 'Ella puede', pt: 'Ela pode' },
          { es: 'Nosotros vamos', pt: 'Nós vamos' },
        ],
      },
      {
        id: 'rotina',
        name: 'Rotina diária',
        cards: [
          { es: 'Me levanto temprano', pt: 'Eu acordo cedo' },
          { es: 'Voy al trabajo', pt: 'Eu vou ao trabalho' },
          { es: 'Como al mediodía', pt: 'Eu almoço ao meio-dia' },
          { es: 'Vuelvo a casa', pt: 'Eu volto para casa' },
          { es: 'Ceno con mi familia', pt: 'Eu janto com minha família' },
          { es: 'Me acuesto tarde', pt: 'Eu deito tarde' },
          { es: 'Hago ejercicio', pt: 'Eu faço exercício' },
          { es: 'Reviso mi correo', pt: 'Eu confiro meu e-mail' },
        ],
      },
      {
        id: 'compras',
        name: 'Compras',
        cards: [
          { es: '¿Tiene talla más grande?', pt: 'Tem um tamanho maior?' },
          { es: 'Quiero probarme esto', pt: 'Quero experimentar isso' },
          { es: '¿Aceptan tarjeta?', pt: 'Aceitam cartão?' },
          { es: 'Está muy caro', pt: 'Está muito caro' },
          { es: '¿Tiene descuento?', pt: 'Tem desconto?' },
          { es: 'Lo llevo', pt: 'Vou levar' },
          { es: '¿Dónde está la caja?', pt: 'Onde fica o caixa?' },
          { es: 'Solo estoy mirando', pt: 'Só estou olhando' },
        ],
      },
      {
        id: 'viagem',
        name: 'Viagem',
        cards: [
          { es: 'Quisiera reservar una habitación', pt: 'Gostaria de reservar um quarto' },
          { es: '¿A qué hora sale el vuelo?', pt: 'A que horas sai o voo?' },
          { es: 'Necesito un taxi', pt: 'Preciso de um táxi' },
          { es: '¿Dónde queda la estación?', pt: 'Onde fica a estação?' },
          { es: 'Perdí mi equipaje', pt: 'Perdi minha bagagem' },
          { es: '¿Cuánto tarda el viaje?', pt: 'Quanto tempo demora a viagem?' },
          { es: 'Voy de vacaciones', pt: 'Eu vou de férias' },
          { es: '¿Puede recomendarme un lugar?', pt: 'Pode me recomendar um lugar?' },
        ],
      },
      {
        id: 'clima',
        name: 'Tempo e clima',
        cards: [
          { es: 'Hace mucho calor', pt: 'Está muito calor' },
          { es: 'Está lloviendo', pt: 'Está chovendo' },
          { es: 'Hace frío', pt: 'Está frio' },
          { es: 'El pronóstico dice', pt: 'A previsão diz' },
          { es: 'Está nublado', pt: 'Está nublado' },
          { es: 'Hace viento', pt: 'Está ventando' },
          { es: 'Va a nevar', pt: 'Vai nevar' },
          { es: 'El clima está agradable', pt: 'O clima está agradável' },
        ],
      },
      {
        id: 'opinioes',
        name: 'Comparações e opiniões',
        cards: [
          { es: 'Creo que es mejor', pt: 'Acho que é melhor' },
          { es: 'Prefiero este', pt: 'Eu prefiro este' },
          { es: 'Es más caro que aquel', pt: 'É mais caro que aquele' },
          { es: 'Me parece bien', pt: 'Me parece bem' },
          { es: 'No estoy de acuerdo', pt: 'Eu não concordo' },
          { es: 'Depende de la situación', pt: 'Depende da situação' },
          { es: 'Es tan bueno como el otro', pt: 'É tão bom quanto o outro' },
          { es: 'Cambié de opinión', pt: 'Eu mudei de ideia' },
        ],
      },
    ],
  },
  {
    id: 'avancado',
    name: 'Avançado',
    categories: [
      {
        id: 'idiomatico',
        name: 'Expressões idiomáticas',
        cards: [
          { es: 'Estar en las nubes', pt: 'Estar com a cabeça nas nuvens' },
          { es: 'Costar un ojo de la cara', pt: 'Custar os olhos da cara' },
          { es: 'Tirar la toalla', pt: 'Jogar a toalha (desistir)' },
          { es: 'No tener pelos en la lengua', pt: 'Não ter papas na língua' },
          { es: 'Meter la pata', pt: 'Fazer besteira' },
          { es: 'Ser pan comido', pt: 'Ser moleza' },
          { es: 'Estar entre la espada y la pared', pt: 'Estar entre a cruz e a espada' },
          { es: 'Tomar el pelo', pt: 'Tirar sarro / Zoar' },
        ],
      },
      {
        id: 'conectores',
        name: 'Conectores de discurso',
        cards: [
          { es: 'Sin embargo', pt: 'No entanto' },
          { es: 'Por lo tanto', pt: 'Portanto' },
          { es: 'Además', pt: 'Além disso' },
          { es: 'A pesar de', pt: 'Apesar de' },
          { es: 'De hecho', pt: 'Na verdade' },
          { es: 'En cuanto a', pt: 'Quanto a' },
          { es: 'Por otro lado', pt: 'Por outro lado' },
          { es: 'En resumen', pt: 'Em resumo' },
        ],
      },
      {
        id: 'subjuntivo',
        name: 'Subjuntivo básico',
        cards: [
          { es: 'Espero que estés bien', pt: 'Espero que você esteja bem' },
          { es: 'Ojalá llueva', pt: 'Tomara que chova' },
          { es: 'No creo que sea cierto', pt: 'Não acho que seja verdade' },
          { es: 'Es posible que venga', pt: 'É possível que ele venha' },
          { es: 'Quiero que lo hagas', pt: 'Quero que você faça isso' },
          { es: 'Dudo que sea así', pt: 'Duvido que seja assim' },
          { es: 'Aunque sea difícil', pt: 'Mesmo que seja difícil' },
          { es: 'Antes de que llegues', pt: 'Antes que você chegue' },
        ],
      },
      {
        id: 'debate',
        name: 'Debate e opinião',
        cards: [
          { es: 'Desde mi punto de vista', pt: 'Do meu ponto de vista' },
          { es: 'Hay que tener en cuenta', pt: 'É preciso levar em conta' },
          { es: 'Cabe destacar que', pt: 'Vale destacar que' },
          { es: 'En mi opinión', pt: 'Na minha opinião' },
          { es: 'Eso depende del contexto', pt: 'Isso depende do contexto' },
          { es: 'Coincido contigo', pt: 'Eu concordo com você' },
          { es: 'Discrepo totalmente', pt: 'Discordo totalmente' },
          { es: 'Vale la pena discutirlo', pt: 'Vale a pena discutir isso' },
        ],
      },
      {
        id: 'trabalho',
        name: 'Trabalho e negócios',
        cards: [
          { es: 'Tengo una reunión', pt: 'Eu tenho uma reunião' },
          { es: 'Firmar el contrato', pt: 'Assinar o contrato' },
          { es: 'Cumplir el plazo', pt: 'Cumprir o prazo' },
          { es: 'Aumentar las ventas', pt: 'Aumentar as vendas' },
          { es: 'Tomar una decisión', pt: 'Tomar uma decisão' },
          { es: 'Alcanzar el objetivo', pt: 'Alcançar o objetivo' },
          { es: 'Solicitar un aumento', pt: 'Pedir um aumento' },
          { es: 'Trabajar en equipo', pt: 'Trabalhar em equipe' },
        ],
      },
      {
        id: 'atualidades',
        name: 'Notícias e atualidades',
        cards: [
          { es: 'Según los expertos', pt: 'Segundo os especialistas' },
          { es: 'El gobierno anunció', pt: 'O governo anunciou' },
          { es: 'Se espera que', pt: 'Espera-se que' },
          { es: 'Los datos revelan', pt: 'Os dados revelam' },
          { es: 'El costo de vida aumentó', pt: 'O custo de vida aumentou' },
          { es: 'El medio ambiente', pt: 'O meio ambiente' },
          { es: 'La economía se recupera', pt: 'A economia se recupera' },
          { es: 'Un tema polémico', pt: 'Um tema polêmico' },
        ],
      },
    ],
  },
];

const STORAGE_KEY = 'flashcardsEspanolProgress';
const STATS_STORAGE_KEY = 'flashcardsEspanolStats';

// ============================================================
// ESTADO EM MEMÓRIA
// ============================================================
// currentOrder guarda a sequência (possivelmente embaralhada) de
// índices dos cartões da categoria atual.
// currentPosition é a posição dentro dessa sequência.
let currentLevelId = LEVELS[0].id;
let currentCategoryId = LEVELS[0].categories[0].id;
let currentOrder = [];
let currentPosition = 0;

// ============================================================
// ELEMENTOS DA PÁGINA
// ============================================================
const levelBar = document.getElementById('level-bar');
const categorySelect = document.getElementById('category-select');
const progressIndicator = document.getElementById('progress-indicator');
const flashcard = document.getElementById('flashcard');
const frontText = document.getElementById('front-text');
const backText = document.getElementById('back-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const statsBtn = document.getElementById('stats-btn');
const statsOverlay = document.getElementById('stats-overlay');
const statsClose = document.getElementById('stats-close');
const statCurrentStreakEl = document.getElementById('stat-current-streak');
const statBestStreakEl = document.getElementById('stat-best-streak');
const statTotalCardsEl = document.getElementById('stat-total-cards');

// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function getLevelById(id) {
  return LEVELS.find((lvl) => lvl.id === id) || LEVELS[0];
}

function getCategoryById(levelId, categoryId) {
  const level = getLevelById(levelId);
  return level.categories.find((cat) => cat.id === categoryId) || level.categories[0];
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
    levelId: currentLevelId,
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
// ESTATÍSTICAS (sequência de dias e cartões vistos)
// ============================================================

const DEFAULT_STATS = {
  currentStreak: 0,
  longestStreak: 0,
  lastVisitDate: null,
  totalCardsViewed: 0,
};

// Retorna a data de hoje no formato AAAA-MM-DD, usando o horário local
// (evita problemas de fuso horário que o UTC do toISOString() causaria).
function todayDateString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Diferença em dias entre duas datas no formato AAAA-MM-DD.
function daysBetween(dateStrEarlier, dateStrLater) {
  const d1 = new Date(`${dateStrEarlier}T00:00:00`);
  const d2 = new Date(`${dateStrLater}T00:00:00`);
  return Math.round((d2 - d1) / 86400000);
}

function loadStats() {
  try {
    const raw = localStorage.getItem(STATS_STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATS };
    return { ...DEFAULT_STATS, ...JSON.parse(raw) };
  } catch (err) {
    console.warn('Não foi possível carregar as estatísticas salvas:', err);
    return { ...DEFAULT_STATS };
  }
}

function saveStats(stats) {
  try {
    localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats));
  } catch (err) {
    console.warn('Não foi possível salvar as estatísticas:', err);
  }
}

// Atualiza a sequência de dias seguidos ao carregar o app: se o último
// acesso foi ontem, soma 1; se foi hoje, mantém; se foi há mais tempo
// (ou nunca), reinicia a sequência em 1.
function updateStreakOnLoad() {
  const stats = loadStats();
  const today = todayDateString();

  if (stats.lastVisitDate === today) {
    // já contabilizado hoje, não faz nada
  } else if (stats.lastVisitDate) {
    const diff = daysBetween(stats.lastVisitDate, today);
    if (diff === 1) {
      stats.currentStreak += 1;
    } else if (diff > 1) {
      stats.currentStreak = 1;
    }
    stats.lastVisitDate = today;
  } else {
    stats.currentStreak = 1;
    stats.lastVisitDate = today;
  }

  stats.longestStreak = Math.max(stats.longestStreak || 0, stats.currentStreak);
  saveStats(stats);
  return stats;
}

function incrementCardsViewed() {
  const stats = loadStats();
  stats.totalCardsViewed = (stats.totalCardsViewed || 0) + 1;
  saveStats(stats);
}

function renderStats() {
  const stats = loadStats();
  statCurrentStreakEl.textContent = stats.currentStreak;
  statBestStreakEl.textContent = stats.longestStreak;
  statTotalCardsEl.textContent = stats.totalCardsViewed;
}

function openStats() {
  renderStats();
  statsOverlay.hidden = false;
}

function closeStats() {
  statsOverlay.hidden = true;
}

// ============================================================
// RENDERIZAÇÃO
// ============================================================

function renderLevelButtons() {
  const buttons = levelBar.querySelectorAll('.level-btn');
  buttons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.level === currentLevelId);
  });
}

function renderCategoryOptions() {
  const level = getLevelById(currentLevelId);
  categorySelect.innerHTML = '';
  level.categories.forEach((cat) => {
    const option = document.createElement('option');
    option.value = cat.id;
    option.textContent = cat.name;
    categorySelect.appendChild(option);
  });
  categorySelect.value = currentCategoryId;
}

function renderCurrentCard() {
  const category = getCategoryById(currentLevelId, currentCategoryId);
  const cardIndex = currentOrder[currentPosition];
  const card = category.cards[cardIndex];

  frontText.textContent = card.es;
  backText.textContent = card.pt;

  // Sempre volta a mostrar a frente do cartão ao trocar de cartão.
  flashcard.classList.remove('is-flipped');

  progressIndicator.textContent = `Cartão ${currentPosition + 1} de ${category.cards.length}`;

  incrementCardsViewed();
}

// ============================================================
// AÇÕES DO USUÁRIO
// ============================================================

function goToNext() {
  const category = getCategoryById(currentLevelId, currentCategoryId);
  currentPosition = (currentPosition + 1) % category.cards.length;
  renderCurrentCard();
  saveProgress();
}

function goToPrevious() {
  const category = getCategoryById(currentLevelId, currentCategoryId);
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
  const category = getCategoryById(currentLevelId, categoryId);
  currentCategoryId = category.id;
  currentOrder = sequentialOrder(category.cards.length);
  currentPosition = 0;
  renderCurrentCard();
  saveProgress();
}

function switchLevel(levelId) {
  const level = getLevelById(levelId);
  currentLevelId = level.id;
  currentCategoryId = level.categories[0].id;
  currentOrder = sequentialOrder(level.categories[0].cards.length);
  currentPosition = 0;
  renderLevelButtons();
  renderCategoryOptions();
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
  updateStreakOnLoad();

  const saved = loadProgress();

  if (saved && saved.levelId && getLevelById(saved.levelId)) {
    const level = getLevelById(saved.levelId);
    const category = level.categories.find((cat) => cat.id === saved.categoryId) || level.categories[0];
    const validOrder =
      Array.isArray(saved.order) && saved.order.length === category.cards.length;

    currentLevelId = level.id;
    currentCategoryId = category.id;
    currentOrder = validOrder ? saved.order : sequentialOrder(category.cards.length);
    currentPosition =
      typeof saved.position === 'number' &&
      saved.position >= 0 &&
      saved.position < category.cards.length
        ? saved.position
        : 0;
  } else {
    currentOrder = sequentialOrder(getCategoryById(currentLevelId, currentCategoryId).cards.length);
    currentPosition = 0;
  }

  renderLevelButtons();
  renderCategoryOptions();
  categorySelect.value = currentCategoryId;
  renderCurrentCard();

  // Eventos
  flashcard.addEventListener('click', toggleFlip);
  nextBtn.addEventListener('click', goToNext);
  prevBtn.addEventListener('click', goToPrevious);
  shuffleBtn.addEventListener('click', shuffleCurrentCategory);
  categorySelect.addEventListener('change', (e) => switchCategory(e.target.value));
  levelBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.level-btn');
    if (btn) switchLevel(btn.dataset.level);
  });
  statsBtn.addEventListener('click', openStats);
  statsClose.addEventListener('click', closeStats);
  statsOverlay.addEventListener('click', (e) => {
    if (e.target === statsOverlay) closeStats();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !statsOverlay.hidden) closeStats();
  });
}

init();
