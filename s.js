var no = {
    roll: function () {
      var randomNumber = Math.floor(Math.random() * 5) + 1;
      return randomNumber;
    }
  }
    
   //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = no.roll();
    printNumber(result);
  };
  var button = document.getElementById('button1');
  
  button.onclick = function() {
    var result = no.roll();
    printNumber(result);
  };

  
  
    var button = document.getElementById('button');
    button.onclick=function one()
    {
    for(n=randomNumber,i=1;i<=5;i++)
    {
      if (n==1 && i==1 )
      {
        document.getElementById(first);
      }
      if (n==1 && i==2 )
      {
        document.getElementById(second);
      }
      if(n==1 && i==3)
      {
        document.getElementById(third);
      }
      if(n==1 && i==4)
      {
        document.getElementById(fourth);
      }
      if(n==1 && i==5)
      {
        document.getElementById(fifth);
      }
    }
  }

  var button = document.getElementById('button');
  button.onclick=function two ()
    {
    for(n=randomNumber,i=1;i<=5;i++)
    {
      if (n==2 && i==1 )
      {
        document.getElementById(first);
      }
      if (n==2 && i==2 )
      {
        document.getElementById(second);
      }
      if(n==2 && i==3)
      {
        document.getElementById(third);
      }
      if(n==2 && i==4)
      {
        document.getElementById(fourth);
      }
      if(n==2 && i==5)
      {
        document.getElementById(fifth);
      }
    }
  }



  var button = document.getElementById('button');
    button.onclick=function three()
   {
    for(n=randomNumber,i=1;i<=5;i++)
    {
      if (n==3 && i==1 )
      {
        document.getElementById(first);
      }
      if (n==3 && i==2 )
      {
        document.getElementById(second);
      }
      if(n==3 && i==3)
      {
        document.getElementById(third);
      }
      if(n==3 && i==4)
      {
        document.getElementById(fourth);
      }
      if(n==3 && i==5)
      {
        document.getElementById(fifth);
      }
    }
  }



  var button = document.getElementById('button');
  button.onclick=function four(){
    for(n=randomNumber,i=1;i<=5;i++)
    {
      if (n==4 && i==1 )
      {
        document.getElementById(first);
      }
      if (n==4 && i==2 )
      {
        document.getElementById(second);
      }
      if(n==4 && i==3)
      {
        document.getElementById(third);
      }
      if(n==4 && i==4)
      {
        document.getElementById(fourth);
      }
      if(n==4 && i==5)
      {
        document.getElementById(fifth);
      }
    }
    }


    var button = document.getElementById('button');
    button.onclick=function five(){
    for(n=randomNumber,i=1;i<=5;i++)
    {
      if (n==5 && i==1 )
      {
        document.getElementById(first);
      }
      if (n==5 && i==2 )
      {
        document.getElementById(second);
      }
      if(n==5 && i==3)
      {
        document.getElementById(third);
      }
      if(n==5 && i==4)
      {
        document.getElementById(fourth);
      }
      if(n==5 && i==5)
      {
        document.getElementById(fifth);
      }
    }
    }
