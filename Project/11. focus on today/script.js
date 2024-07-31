const checkBoxes = document.querySelectorAll('.custom-checkbox');
const inputFileds = document.querySelectorAll('.goal-input');
const error = document.querySelector('.error-label')
const progressValue = document.querySelector('.progress-value')
const motivationKey = document.querySelector('.motivation-key');
const quote = document.querySelector('.quote');



const message = [
    "Raise the bar by completing your goals!",
    "Nice but half goals are incomplete!",
    "Awesome you can do this",
    "Only one goal is left",
    "Congratulation all goals are completed"
]

// const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
    
//     first:{
//         name: '',
//         completed: false
//     },
//     second:{
//         name: '',
//         completed: false
//     },
//     third:{
//         name: '',
//         completed: false
//     }

// };

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {};
let completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length;


progressValue.style.width = `${completedGoalsCount / inputFileds.length * 100}%`;
progressValue.firstElementChild.innerText = `${completedGoalsCount}/${inputFileds.length} completed`


motivationKey.innerHTML = message[completedGoalsCount];



checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('click', () => {
        const allFieldsFilled = [...inputFileds].every((input) => {

            return input.value
        })

        if (allFieldsFilled === true) {
            checkBox.parentElement.classList.toggle('completed');
            error.style.display = 'none';

            const inputId = checkBox.nextElementSibling.id;
            allGoals[inputId].completed = !allGoals[inputId].completed;
            completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length;

            progressValue.style.width = `${completedGoalsCount / inputFileds.length * 100}%`;
            progressValue.firstElementChild.innerText = `${completedGoalsCount}/${inputFileds.length} completed`

            motivationKey.innerHTML = message[completedGoalsCount];

            
            
            localStorage.setItem('allGoals', JSON.stringify(allGoals));
        }
        else {
            error.style.display = 'block';
        }
        
    })
})

inputFileds.forEach((input) => {
    
        if(allGoals[input.id]){

            input.value = allGoals[input.id].name ;

            if (allGoals[input.id].completed) {
                input.parentElement.classList.add('completed');
                
            }
        }

    


    input.addEventListener('focus', () => {
        error.style.display = 'none';
    })

    input.addEventListener('input', (e) => {

        if ( allGoals[input.id] && allGoals[input.id].completed) {
            
            input.value = allGoals[input.id].name;
            return true
        }

        if(allGoals[input.id]){
            allGoals[input.id].name = input.value;
        } else{
            allGoals[input.id] = {
                name: input.value,
                completed: false
            }
        }
        
        localStorage.setItem('allGoals', JSON.stringify(allGoals));
    })
})

