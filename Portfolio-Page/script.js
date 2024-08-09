document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
});


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const nav = document.getElementsByClassName('nav')[0]

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active')
})
