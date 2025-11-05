// --- PASSO 1: A Variável de Armazenamento (LET) ---
// Vamos usar 'let' porque o valor vai mudar (incrementar)
let contador = 0; 


// --- PASSO 2: Agarrar os Elementos HTML (DOM) ---

// 1. O display (local onde o número aparece)
const display = document.getElementById("valor-display"); 

// 2. O botão
const botao = document.getElementById("botao-clicar");


// --- PASSO 3: A Função que Faz a Mágica ---

function aumentarContador() {
    
    // A. Aumentar a nossa variável de armazenamento
    contador = contador + 1; // Ou o atalho: contador++;
    
    // B. Mudar o conteúdo VISUAL do elemento HTML
    // Usamos .textContent para colocar o novo valor na página
    display.textContent = contador;
    
    // Opcional: Efeito visual ao passar de 10
    if (contador > 10) {
        display.style.color = "red";
    }
}


// --- PASSO 4: O Ouvinte de Eventos ---

// Dizemos ao botão para, quando for clicado, executar a função 'aumentarContador'
botao.addEventListener("click", aumentarContador);