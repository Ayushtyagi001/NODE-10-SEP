const fs = require('fs');
const router = require('../routes/user');
const users = require('../users.json');

function getAllUsers(req,res){
    res.json(users);
 
}
function getParticularUser(req,res){
    let id= req.params.id;
    let user =users.find(user=>user.id===parseInt(id));
    res.json(user)

}
function addUser(req,res){
    console.log(req.body)
    let user = req.body; 
    user.id=users.length+1;
    users.push(user);
    fs.writeFile('users.json',JSON.stringify(req.body),(erre)=>{
        if(erre){
            console.log(erre);
        }
        else{
            res.end("added sucessfully....")
        }
})
}
module.exports = {
    getAllUsers,

    getParticularUser,
    addUser
}
