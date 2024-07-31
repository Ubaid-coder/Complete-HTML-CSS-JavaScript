function a(b){
    console.dir(b);
    b();

}

function sayhi(){
    console.log('hi guys howare you?');
}

a(sayhi);

