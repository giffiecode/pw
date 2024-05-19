
document.addEventListener('DOMContentLoaded', () => {
  const foot = document.getElementsByClassName('footage');
  Array.from(foot).forEach(element => {
    element.style.fontFamily = 'Monospace';
  });
  const codeElement = document.querySelector('.code');
  codeElement.addEventListener('click', () => {
    codeElement.style.color = '#007bff';
  });
});
 



