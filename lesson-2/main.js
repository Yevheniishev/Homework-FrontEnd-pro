



// ----------DZ-2------------





     var img1 = 'black.png';
     var img2 = 'gold.png';
    var img3 = 'silver.png';

  var  info =[
    {
    memory: 16,
    price: 100,
    },
    {
    memory:32,
    price:200,
    },
    {
    memory:64,
    price: 300,
    },
    {
    memory:128,
    price:400
    },

    {
    memory:256,
    price:500
    },

    {
    memory:512,
    price:600
    },

    ];
 var Colors = [
        {
            color: 'black',
            image: img1,
            priceCoeff: 10
        },
        {
            color: 'silver',
            image: img3,
            priceCoeff: 20
        },
        {
            color: 'gold',
            image: img2,
            priceCoeff: 30
        }       
    ];
    
    var result;
    var phone;
    var price = 0;
    var coeff = 0;
    
     while(true) {
         var memory = prompt('Выбрать память: 16/32/64/128/256/512 Gb');
         if (memory === null) {
            document.write('<h1>Всего доброго</h1>');
            break;
         } 
         
         for(var j=0; j<info.length; j++){
             memory = +memory;
              if(memory === info[j].memory){
                  result = info[j].price;
                  break;
         }
         }
        
         
         var color = prompt('Выбрать цвет: black, silver, gold?');
         if (color === null) {
            document.write('<h1>Всего доброго</h1>');
            break;
            
         }
              for (var j = 0; j < Colors.length; j++) {
                   if(color === Colors[j].color) {
                       phone = Colors[j].image;
                       coeff = Colors[j].priceCoeff;
                       break;
              }
              
              }
             
              
      if(result){
        result += coeff;
        document.write('<img src="./img/' + phone + '" alt="' + phone + '">');
        document.write('<h1>' + 'Стоимость телефона: ' + result + '$</h1>');
          break;
          
      }
       
}


     

