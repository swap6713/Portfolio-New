javascript
document.querySelector('.hover-effect').addEventListener('mouseover', function() {
 this.style.color = 'black';
});

document.querySelector('.hover-effect').addEventListener('mouseout', function() {
 this.style.color = 'white';
});