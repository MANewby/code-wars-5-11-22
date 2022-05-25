function howMuchILoveYou(nbPetals) {
    // your code
  let n = nbPetals % 6
    if (n === 1) {
    return 'I love you'
  }
  else if (n === 2){
   return 'a little'
  }
  else if (n === 3){
   return 'a lot'
}
  else if (n === 4){
   return 'passionately'
} 
  else if (n === 5){
  return 'madly'
} 
  else if((n ===6) || (n === 0)){
  return 'not at all'
}
  }
