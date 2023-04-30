(function(){
  const titleQuestions = [...document.querySelectorAll('.questions__title')];
  console.log(titleQuestions)

    titleQuestions.forEach (question =>{
        question.addEventListener('click',()=>{
             let height = 0;
             let answer = question.nextSibling;
             let addPadding = question.parentElement.parentElement;
             
             addPadding.classList.toggle('question__Padding--add');
             question.childrem[0].ClassList.toggle('questions__arrow--rotate');
             
             if(answer.clientHeight === 0 ){
                height = answer.scrollHeight;
             }

             answer.style.height =   `${height}px`;   
            });

    });

})();