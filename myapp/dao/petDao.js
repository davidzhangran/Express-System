const {petModel}=require("../dao/models/petModel")
module.exports.addStudent=async function(addstu){
    return await petModel.create(addstu);
}