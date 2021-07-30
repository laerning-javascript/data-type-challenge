let kata = 'Bunga';

if(isNaN(kata)){
    console.log('Username '+kata);
}else if(parseInt(kata) <= 0){
    console.log('Invalid data');
}else if(typeof(kata)==='number'){
    console.log('age '+kata);
}else if(kata){
    console.log('thank you for agreeing');
}else if(!kata){
    console.log('cannot proceed without agreement');
}