const users = [ {firstname:'Manasi',middlename:'Sudarshan',lastname:'Nighot',contactnumber:'9561128566',occupation:'student',email:'mansi.nighot@gmail.com',password:'1234'},
                {firstname:'Soahm',middlename:'Sudarshan',lastname:'Nighot',contactnumber:'9561128566',occupation:'student',email:'soham.nighot@gmail.com',password:'1234'},
                {firstname:'Sanika',middlename:'Sudarshan',lastname:'Nighot',contactnumber:'9561128566',occupation:'student',email:'sanika.nighot@gmail.com',password:'1234'},
                {firstname:'Yash',middlename:'Subhash',lastname:'Nighot',contactnumber:'9561128566',occupation:'student',email:'yash.nighot@gmail.com',password:'1234'},
                {firstname:'Om',middlename:'Subhash',lastname:'Nighot',contactnumber:'9561128566',occupation:'student',email:'om.nighot@gmail.com',password:'1234'}];
                
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