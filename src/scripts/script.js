const bodyElement = window.document.body // Captura o Body
abrirMenuMobile.addEventListener ('click', abrirMenu)  // Adiciona evento ao Botão Abrir Mobile
fecharMenuMobile.addEventListener('click', fecharMenu) // Adiciona evento ao Botão Fechar Mobile

// Função para abrir o menu
function abrirMenu(){
    bodyElement.style.overflow = 'hidden' // Trava o Body
    menu.style.display = 'flex' // Flexbox
    menu.style.flexDirection = 'column' // Alinha em Colunas
    menu.style.alignItems = 'center' // Alinha ao Centro no Eixo Perpendicular
    menu.style.justifyContent = 'center' // Alinha ao Centro no Eixo Principal
    menu.style.gap = '48px' // Espaçamento de 48px
    abrirMenuMobile.style.display = 'none' // Esconde o Botão Abrir Mobile
    fecharMenuMobile.style.display = 'flex' // Aparece o Botão Fechar Mobile
}

// Função para fechar o menu
function fecharMenu(){
    window.location.reload() // Recarrega a Página
}