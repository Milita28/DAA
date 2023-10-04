const monster = [
    "ábbey",
    "draculaura",
    "spéctra", 
    "gígi", 
    "cúpidó"
  ];
  var vocal = 0;
  var i=0;
  var j=0;
  
  function compruebaVocal(letras) {
          if (letras === 'á' || letras === 'é' || letras === 'í' || letras === 'ó' || letras === 'ú') {
      vocal = vocal+1;
          }
  };
  
  for( i=0; i<monster.length; i++){
      let letras = monster[i].split('');
      console.log(monster[i]);
          for(j=0; j<letras.length; j++){
          compruebaVocal(letras[j]);
          };
  };
      console.log("#vocales tildadas: "+ vocal);