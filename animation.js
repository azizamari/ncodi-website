const questions=document.querySelectorAll(".accordion_item")
questions.forEach(question=>question.addEventListener("click",()=>{
  const currentAnswer=question.querySelector(".answer");
  if(currentAnswer.classList.contains("openAnswer")){
    currentAnswer.classList.remove("openAnswer");
    question.querySelector(".accordion_link .bx-plus").style.display="block";
    question.querySelector(".accordion_link .bx-minus").style.display="none";
  }
  else {  
    questions.forEach(q=>{
      q.querySelector(".answer").classList.remove("openAnswer");
      question.querySelector(".accordion_link .bx-plus").style.display="none";
      question.querySelector(".accordion_link .bx-minus").style.display="block";
    });
    console.log(this)
    question.querySelector(".answer").classList.add("openAnswer");
    question.querySelector(".accordion_link .bx-plus").style.display="none";
    question.querySelector(".accordion_link .bx-minus").style.display="block";
  }
}));