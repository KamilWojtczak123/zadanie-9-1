//script.js
var a, h, triangleArena;
triangleArena = a*h/2;
console.log('TriangleArena with base a:' + a + 'and height h:' + h);
function getTriangleArea(a, h){
    if(a<0 || h<0){
        console.log('Nieprawidłowe dane.');
    }
    return a*h/2;
}
console.log(getTriangleArea(10, 6));
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(8, 16);
var triangle3Area - getTriangleArea(5,8);