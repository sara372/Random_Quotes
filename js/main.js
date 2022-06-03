


quotesAuther = [ '--Jim Rohn','--Epictetus','--Frank Sinatra', '--Wayne Gretzy',  '--Nelson Mandela', '--Elbert Hubbard']
quotes =['"Beware of what you become in pursuit of what you want."','"It\'s not what happens to you, but how you react to it that matters."'
,'"The best revenge is massive success."','"You miss 100% of the shots you don\'t take."','"Resentment is like drinking poison and waiting for your enemies to die."'
,'"Do not take life too seriously. You will not get out alive."'
] ; 
  
    
    function generateQuote(){
       var randomNum=Math.floor((Math.random())*(quotesAuther.length));
       document.getElementById('quoteOutput').innerHTML=quotes[randomNum];
       document.getElementById('authorOutput').innerHTML=quotesAuther[randomNum];
        }
    
    