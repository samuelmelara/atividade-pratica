// Comentário: Função simples para confirmar o carregamento da página 
document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada com sucesso.");
    
    // Exemplo de interação simples solicitada [cite: 63]
    const secao = document.querySelector('section');
    if (secao) {
        secao.style.opacity = "0";
        setTimeout(() => {
            secao.style.transition = "opacity 1s";
            secao.style.opacity = "1";
        }, 100);
    }
});
