var users = [
    { id: 1, email: 'ravi.tambade@transflower.in', password:'seed', firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 2, email: 'shubhangi.tambade@transflower.in', password:' transflower', firstname:"shubhangi", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 3, email: 'sanika.bhor@gmail.com', password:'pvg', firstname:"Sankia", lastname:"Bhor",contactnumber:"9881735801" },
    { id: 4, email: 'rutuja@gmail.com', password:'Rutuja@27', firstname:"Rutuja", lastname:"Tambade",contactnumber:"7709567424" },
    { id: 5, email: 'shreedhar.patil@gmail.com', password:'seed', firstname:"shreedhar", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 6, email: 'Ajinkya.tambade@gmail.com', password:'123', firstname:"Ajinkya", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 7, email: 'kartik.g@gmail.com', password:'seed', firstname:"kartik", lastname:"Tambade",contactnumber:"9881735801" },    
    { id: 8, email: 'mansi.nighot@gmail.com', password:'seed', firstname:"manasi", lastname:"Nighot",contactnumber:"9881735801" },
];
 
//Service
 
const customerservice = {
 
    //service methods
   
     validate(email, password){
        let user= users.find( (theUser)=>(theUser.email ===email && theUser.password===password));
        if(user ==undefined){
            return false;
        }
        return true;
     },
 
     getAll() {    
         return users;
     },
 
     getUserById(id){
        let user= users.find( (theUser)=>(theUser.id ===id));
        return user;
     },
 
     register(theUser){
         users.push(theUser);
     },
 
     Update(theUser){
         users=users.filter(user=>user.id !==theUser.id);
         users.push(theUser);
     },
 
     remove(id){
         users=users.filter(theUser=>theUser.id !==id);
     }
 }
 
 export default customerservice;