const btnOpenModal=document.querySelector('.js__modal')
console.log(btnOpenModal)
const backdrop=document.querySelector('.back__drop')
const modal=document.querySelector('.modal')
btnOpenModal.addEventListener('click',function(){
    backdrop.classList.remove('js-hidden')
})
backdrop.addEventListener('click',function(){
    backdrop.classList.add('js-hidden')
})
modal.addEventListener('click',function(event){
event.stopPropagation()
})