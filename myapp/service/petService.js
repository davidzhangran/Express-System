let {addPet}=require("../dao/petDao");
module.exports.addPet=async function(addstu){
    let result=await addPet(addstu);
     if(result){
         return true;
     }else{
         return false;
     }
 }