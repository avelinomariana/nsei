// Seleciona todos os flashcards
const flashcards = document.querySelectorAll('.flashcard');

// Adiciona um evento de clique para cada flashcard
flashcards.forEach(card => {
    card.addEventListener('click', () => {
        // Alterna a visibilidade da resposta
        card.classList.toggle('active');
    });
});

