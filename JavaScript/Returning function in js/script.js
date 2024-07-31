const a = 234;
const b = 23;


function parent(){
    function add(){       
        console.log(a + b);
    }
    return add;
}

const add1 = parent();