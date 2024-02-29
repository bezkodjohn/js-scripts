var links = document.querySelectorAll('a');
links.forEach(function(link) {
    link.style.border = '2px solid red';
    link.style.padding = '2px';
    link.style.borderRadius = '4px';
    link.style.boxShadow = '0 0 5px rgba(255, 0, 0, 0.5)';
});
