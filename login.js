const token = sessionStorage.getItem('token');

if ((!token) || (token == 'undefined')) {
    window.location.href = 'https://supeskov.github.io/PWP_Baza-2.0/5.2/5.2.4.html';
}