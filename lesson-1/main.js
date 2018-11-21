
// ---------- DZ-1 ----------


 var color = prompt('Какой цвет телефона: black, gold or silver?');
 var img0 = 'default.png';
 var img1 = 'black.png';
 var img2 = 'gold.png';
 var img3 = 'silver.png';
  if (color === null) {
     document.write('<img src="./img/' + img0 + '" alt="">');
     document.write ('Всего доброго');
 } else {
  
      if ( color === 'black') {
     document.write('<img src="./img/' + img1 + '" alt="">');
 } else if ( color === 'gold') {
     document.write('<img src="./img/' + img2 + '" alt="">');
 } else if ( color === 'silver') {
             document.write('<img src="./img/' + img3 + '" alt="">');
 } else {
   document.write('<img src="./img/' + img0 + '" alt="">');
 }
     var number = prompt('Какая память телефона ?');
     if (number === null) {
         document.write('Необходимо выбрать память');
      } else {
        number = +number;
      
        if (number === 16) {
            document.write('100$');
         } else if (number === 32) {
             document.write('200$');
         } else if ( number === 64) {
             document.write('300$');    
            } else if (number === 128) {
             document.write ('400$');
           } else {
             document.write('Такой памяти не существует');
            }
        
            } 
  
 }



   

   
    // var number = prompt('Какая память телефона ?');
    // if (number === null) {
    //     document.write('Необходимо выбрать память');
    //  } else {
    //    number = +number;
     
    //    if (number === 16) {
    //        document.write('100$');
    //     } else if (number === 32) {
    //         document.write('200$');
    //     } else if ( number === 64) {
    //         document.write('300$');    
    //        } else if (number === 128) {
    //         document.write ('400$');
    //       } else {
    //         document.write('Такой памяти не существует');
    //        }
    //     }
          
    

    
    
   





