function convertir(){

    var array = document.getElementById("input1").value.split('\n');
    var array_chemical = document.getElementById("input2").value.split('\n');
    var elements = array.length;
    var chemical_elements = array_chemical.length;
    var temporal2;
    var temporal3;
    var temporal2_2;
    var array_chemical1;
    var array_chemical2;
    var temp_chemical_value;
    const chec_elemt = new Map();

    var nums = 0;
    var array3;

    for(var i = 0; i<chemical_elements; i++){

        array_chemical1 = array_chemical[i].replace(/\s+/g, '&');
        array_chemical2 = array_chemical1.split('&');
        chec_elemt.set(array_chemical2[1],array_chemical2[0]);
        
    }

    for(var j = 0; j<elements; j++){
        
        temporal2 = array[j].replace(/\s+/g, '&');
        temporal3 = temporal2.split('&');
        temporal3[4] = j+1;

        if(j==0){
            
            for (let [key, value] of chec_elemt) {

                if(key == temporal3[0]){
                    temporal3[5] = value;
                }
            }
            
            array3 = temporal3[1]+" "+temporal3[2]+" "+temporal3[3]+"  "+temporal3[5]+"  "+temporal3[4]+"   "+temporal3[0]+'\n';
        }
        else{

            for (let [key, value] of chec_elemt) {

                if(key == temporal3[0]){
                    temporal3[5] = value;
                }
            }
           
            array3 = array3 + temporal3[1]+" "+temporal3[2]+" "+temporal3[3]+"  "+temporal3[5]+"  "+temporal3[4]+"   "+temporal3[0]+'\n';
        }
    }
    
    document.getElementById("input3").value = array3;
    

}

function borrar_datos(){

    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";

}


document.getElementById("boton1").onclick = convertir;
document.getElementById("boton2").onclick = borrar_datos;