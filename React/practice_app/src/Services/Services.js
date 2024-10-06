const users = [ {firstname:'Manasi',lastname:'Nighot',email:'mansi.nighot@gmail.com',password:'1234'} ];
const Services ={
    validate(email,password){
        let user = users.find((theUser)=>(theUser.email === email && theUser.password === password));
        if(user == undefined){
            return false;
        }
        return true;
    }
}
export default Services;