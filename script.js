document.querySelectorAll('.button-menu').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});
//<!----kai_genos------->
document.getElementById('toggle-button').addEventListener('click', function() {
    var balanceElement = document.getElementById('balance-amount');
    if (balanceElement.style.display === 'none') {
      balanceElement.style.display = 'block';
    } else {
      balanceElement.style.display = 'none';
    }
  });
  'Open in NPM' 
//<!----kai_genos------->