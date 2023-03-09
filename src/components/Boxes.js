
const Boxes = [];

  for(let i=9;i>=0;i--){
    const row = [];
    if(i%2==1){
      for(let j=10;j>=1;j--){
        row.push(i*10 + j);
      }
    }
    else{
      for(let j=1;j<=10;j++){
        row.push(i*10 + j);
      }
    }
    Boxes.push(row);
  }

  export default Boxes;