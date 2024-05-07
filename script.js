document.getElementById('botao').addEventListener('click',function(){
    const mensagem = document.getElementById('mensagem');
    if (mensagem.style.color === 'blue') {
        mensagem.style.color = 'red';
    } else {
        mensagem.style.color= "blue;"
    }
});
document.querySelectorAll('lista-itens li').forEach(function(item) {
    item.addEventListener('click',function(){
        document.getElementById('mensagem-item').textContent = this.getAttribute
    });
});