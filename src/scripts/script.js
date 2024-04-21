const bodyElement = window.document.body
abrirMenuMobile.addEventListener ('click', abrirMenu)
fecharMenuMobile.addEventListener('click', fecharMenu)

function abrirMenu(){
    bodyElement.style.overflow = 'hidden'
    menu.style.display = 'flex'
    menu.style.flexDirection = 'column'
    menu.style.alignItems = 'center'
    menu.style.justifyContent = 'center'
    menu.style.gap = '48px'
    abrirMenuMobile.style.display = 'none'
    fecharMenuMobile.style.display = 'flex'
}

function fecharMenu(){
    window.location.reload()
}