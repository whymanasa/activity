// const btns=document.querySelectorAll('.question-btn');

// btns.forEach(btn => {
//     btn.addEventListener('click',function(e){
//         const ques=e.currentTarget.parentElement.parentElement;
//         ques.classList.toggle('show-text');
//     })
// });

const questions= document.querySelectorAll('.question');

questions.forEach(question => {
    const btn=question.querySelector('.question-btn');
    btn.addEventListener('click',function(){
        questions.forEach(stuff => {
            if(stuff!==question){
                stuff.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    })
});