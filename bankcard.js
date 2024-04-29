let cvvhover = document.getElementById('cvvs-input')
let cvvinput = document.getElementById('cvv-input')
let flipinner = document.getElementById('flip-card-inner')
let changeNumber = document.getElementById('change-number')
let numberinput = document.getElementById('number-input')
let holdername = document.getElementById('holder-name')
let holderinput = document.getElementById('holder-input')
let month = document.getElementById('month')
let year = document.getElementById('year')
let monthinput = document.getElementById('months-input')
let yearinput = document.getElementById('years-input')
let submit = document.getElementById('submit')

const print = function(){

    cvvhover.addEventListener('mouseover',()=>{
        flipinner.style.transform='rotateY(180deg)'
    })

    cvvhover.addEventListener('mouseout',()=>{
        flipinner.style.transform='rotateY(0deg)'
    })

        numberinput.oninput=()=>{
            changeNumber.value=numberinput.value
        }

        holderinput.oninput=()=>{
            holdername.value=holderinput.value
        }

        monthinput.oninput=()=>{
            month.value=monthinput.value
        }

        yearinput.oninput=()=>{
            year.value=yearinput.value
        }

        cvvhover.oninput=()=>{
            cvvinput.value=cvvhover.value
        }

        submit.addEventListener('click',()=>{
            document.getElementById('loader').style.display='block'
            document.getElementById('main').style.display='none'
        })

}

print()