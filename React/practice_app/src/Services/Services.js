const users = [ {firstname:'Manasi',lastname:'Nighot',email:'mansi.nighot@gmail.com',password:'1234'},
                {firstname:'Soahm',lastname:'Nighot',email:'soham.nighot@gmail.com',password:'1234'},
                {firstname:'Sanika',lastname:'Nighot',email:'sanika.nighot@gmail.com',password:'1234'},
                {firstname:'Yash',lastname:'Nighot',email:'yash.nighot@gmail.com',password:'1234'},
                {firstname:'Om',lastname:'Nighot',email:'om.nighot@gmail.com',password:'1234'}];
                
const Services ={
    validate(email,password){
        let user = users.find((theUser)=>(theUser.email === email && theUser.password === password));
        if(user == undefined){
            return false;
        }
        return true;
    },

    getAllUsers (){
        return users;
    },

    register (theUser){
        users.push(theUser)
    }
}
export default Services;