function a(){
    console.log('a')
    b();
    console.log('aa');

}
function b(){
    console.log('b')
    c();
    console.log('bb');
}
function c(){
    console.log('c')
}

function x(){
    console.log('x');
    y();
    console.log('xx');
}
function y(){
    console.log('y');
    console.log('yy');
    z();
}
function z(){
    console.log('z');
    console.log('zz');
}
a();
x();
