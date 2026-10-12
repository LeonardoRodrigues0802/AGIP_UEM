document.addEventListener('DOMContentLoaded', () => {
    
    // --- GERENCIAMENTO DO FORMULÁRIO DE CONTATO/INSCRIÇÃO ---
    const formContato = document.getElementById('form-contato');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    formContato.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;

        mensagemSucesso.innerText = `Obrigado, ${nome}! Seus dados foram enviados com sucesso. Entraremos em contato via WhatsApp no número ${telefone}.`;
        mensagemSucesso.style.display = 'block';

        formContato.reset();
        mensagemSucesso.scrollIntoView({ behavior: 'smooth' });
    });

    // --- SISTEMA DINÂMICO DO MURAL DE RECADOS ---
    const formRecado = document.getElementById('form-recado');
    const containerRecados = document.getElementById('container-recados');

    formRecado.addEventListener('submit', (e) => {
        e.preventDefault();

        // Captura os dados do mini formulário
        const autor = document.getElementById('autor-recado').value;
        const texto = document.getElementById('texto-recado').value;

        // Cria a estrutura HTML do novo recado
        const novoRecado = document.createElement('div');
        novoRecado.classList.add('item-recado');
        
        novoRecado.innerHTML = `
            <p>"${texto}"</p>
            <span>— ${autor}</span>
        `;

        // Insere o novo recado no topo da lista do mural
        containerRecados.insertBefore(novoRecado, containerRecados.firstChild);

        // Limpa o formulário de recados
        formRecado.reset();
    });
});
