


function check() {
    
    // let input2 = document.querySelector('.input-2').value;
    // let input3 = document.querySelector('.input-3').value;

    // if (input1 < input2 && input1 < input3) {
    //     alert(`Saad is a youngest$`);
    // }
    // else if (input2 < input1 && input2 < input3) {
    //     alert(`Mariyum is a youngest`)
    // }
    // else {
    //     alert(`Mariyum is a youngest`)
    // }

    // alert(Math.min(input1, input2, input3))
    let input1 = parseInt(document.querySelector('.input-1').value);
    let i;
    for (i = 2; i < input1; i++) {
       if(i % input1 === 0){
           break;
       }
    }
    if(i === input1){
        alert('prime num');
    }
    else
    {
        alert('not');
    }
    console.log(i);
}