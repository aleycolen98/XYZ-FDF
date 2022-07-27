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

    console.log(array);
    console.log(array_chemical);
    
    var nums = 0;
    console.log(array[0]);
    var array3;

    
    

    for(var i = 0; i<chemical_elements; i++){

        array_chemical1 = array_chemical[i].replace(/\s+/g, '&');
        array_chemical2 = array_chemical1.split('&');
        console.log(array_chemical2);
        chec_elemt.set(array_chemical2[1],array_chemical2[0]);
        
    }

   


    for(var j = 0; j<elements; j++){
        
        temporal2 = array[j].replace(/\s+/g, '&');
        temporal3 = temporal2.split('&');
        temporal3[4] = j+1;
        console.log(temporal3);

        if(j==0){
            
            console.log(array_chemical);
            for (let [key, value] of chec_elemt) {

                console.log(key + ' goes ' + value);
                if(key == temporal3[0]){
                    temporal3[5] = value;
                    console.log(temporal3[5]);
                }
            }
            
            array3 = temporal3[1]+" "+temporal3[2]+" "+temporal3[3]+"  "+temporal3[5]+"  "+temporal3[4]+"   "+temporal3[0]+'\n';
        }
        else{

            for (let [key, value] of chec_elemt) {

                console.log(key + ' goes ' + value);
                if(key == temporal3[0]){
                    temporal3[5] = value;
                    console.log(temporal3[5]);
                }
            }
           
            array3 = array3 + temporal3[1]+" "+temporal3[2]+" "+temporal3[3]+"  "+temporal3[5]+"  "+temporal3[4]+"   "+temporal3[0]+'\n';
        }
    }
    
    console.log(array3);
    document.getElementById("input3").value = array3;
    

}

document.getElementById("boton1").onclick = convertir;