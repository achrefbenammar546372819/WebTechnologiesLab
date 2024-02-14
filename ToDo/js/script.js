numberOfToDo= 0 ; 
let Content = null ; 
let Name = null ; 
document.addEventListener('DOMContentLoaded', function() {
    const list      = document.getElementById("TodoList"); 
    const textInput = document.getElementById('textInput');
    const addToList = document.getElementById('AddTolist') ; 
    const NameInput = document.getElementById('NameInput') ; 
    const dequeue   = document.getElementById('dequeue') ; 

    textInput.addEventListener('change' , ()=>{
        Content = textInput.value ; 
    })

    NameInput.addEventListener('change' , ()=>{
        Name = NameInput.value ; 
    })

    dequeue.addEventListener('click' , ()=>{
        list.removeChild(list.firstChild);
        emptycells();
    })

    addToList.addEventListener('click' , ()=>{
        let element = document.createElement("li") ; 
        element.textContent = Name + " : " + Content; 
        list.appendChild(element) ; 
        emptycells();
    })

    function emptycells(){
        textInput.value = ""; 
        NameInput.value = ""; 
    }
});
  