document.getElementById('task1').addEventListener('click', function(){
  alert('You clicked the button');
});
const gamePrice = 39.99;
const discount = 0.20;
const button = document.createElement('button');
button.id = 'task2';
button.innerHTML = 'Calculate Price';
document.getElementById('Here').appendChild(button);
document.getElementById('task2').addEventListener('click', function(){
  alert(`£${(gamePrice*discount).toFixed(2)} off!`);
});
document.getElementById('img').addEventListener('mouseover', ()=>{
  document.getElementById('img').src = '../../../sd-03-block5-project-meme-generator/imgs/meme2.jpeg'
});
document.getElementById('img').addEventListener('mouseout', ()=>{
  document.getElementById('img').src = '../../../sd-03-block5-project-meme-generator/imgs/meme1.jpeg'
})