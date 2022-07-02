var uno=document.getElementById('uno'),
    dos=document.getElementById('dos'),
    tres=document.getElementById('tres'),
    cuatro=document.getElementById('cuatro')
    verificar=0;
    
    function tarea1(){
        if(verificar==0)
        {
            let numero=prompt('Ingresa un Numero');
            let numero2=prompt('Ingresa un Segundo Numero');
            let suma = Number(numero) + Number(numero2)
            verificar=1;
            console.log('Primer Numero = '+ numero, 'Estado= '+ verificar);
            console.log('Segundo Numero = '+ numero2, 'Estado= '+ verificar);
            alert('La suma de los dos numeros es = '+ suma);
        }
        else
        {
            verificar=0;
        }
    }
    function tarea2(){
        if(verificar==0)
        {
            let numero=prompt('Ingresa una Temperatura Celcius');
            let resultado = Number(numero)*1.8+32;
            verificar=1;
            console.log('Conversion ='+ resultado, 'Estado= '+ verificar);
            alert('La temperatura en grados Fahrenheit es = '+ resultado + ' F°');
        }
        else
        {
            verificar=0;
        }
    }
    function tarea3(){
        if(verificar==0)
        {
            let numero=prompt('Ingresa un Numero');
            let resultado = Number(numero)/10;
            verificar=1;
            console.log('Acabo de Dividir tu numero en 10, el resultado es ='+ resultado, 'Estado= '+ verificar);
            alert('Acabo de Dividir tu numero en 10, el resultado es ='+ resultado);
        }
        else
        {
            verificar=0;
        }
    }
    function tarea4(){
        if(verificar==0)
        {
            var myarray=[1,true,3];
            myarray.forEach(function(myarray,index){
                console.log(index+" de 2"+"->"+ typeof myarray)
                alert(index+" de 2"+"->"+ typeof myarray)
            });
        }
        else
        {
            verificar=0;
        }
    }
    uno.addEventListener('click',tarea1,true)
    dos.addEventListener('click',tarea2,true)
    tres.addEventListener('click',tarea3,true)
    cuatro.addEventListener('click',tarea4,true)




