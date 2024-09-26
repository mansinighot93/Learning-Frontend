// const users = [
//     { id: 1, email: 'ravi.tambade@transflower.in', password: 'seed', firstname: "Ravi", lastname: "Tambade", contactnumber: "9881735801" },
//     { id: 2, email: 'shubhangi.tambade@transflower.in', password: 'transflower', firstname: "Shubhangi", lastname: "Tambade", contactnumber: "9881735801" },
//     { id: 3, email: 'sanika.bhor@gmail.com', password: 'pvg', firstname: "Sanika", lastname: "Bhor", contactnumber: "9881735801" },
//     { id: 4, email: 'nikhil.navale@gmail.com', password: 'seed', firstname: "Nikhil", lastname: "Navale", contactnumber: "9881735801" },
//     { id: 5, email: 'shreedhar.patil@gmail.com', password: 'seed', firstname: "Shreedhar", lastname: "Patil", contactnumber: "9881735801" },
//     { id: 6, email: 'sharan.kulkarni@gmail.com', password: 'seed', firstname: "Sharan", lastname: "Kulkarni", contactnumber: "9881735801" },
//     { id: 7, email: 'kartik.g@gmail.com', password: 'seed', firstname: "Kartik", lastname: "G", contactnumber: "9881735801" },
//     { id: 8, email: 'seema.patil@gmail.com', password: 'seed', firstname: "Seema", lastname: "Patil", contactnumber: "9881735801" },
//   ];
  
//   const AuthService = {
//     validate(email, password) {
//       return users.some(user => user.email === email && user.password === password);
//     },
  
//     getAllUsers() {
//       return [...users];
//     },
  
//     getUserById(id) {
//       return users.find(user => user.id === id);
//     },
  
//     register(newUser) {
//       if (users.some(user => user.email === newUser.email)) {
//         throw new Error('User already exists');
//       }
//       users.push(newUser);
//     },
  
//     update(updatedUser) {
//       const index = users.findIndex(user => user.id === updatedUser.id);
//       if (index === -1) {
//         throw new Error('User not found');
//       }
//       users[index] = updatedUser;
//     },
  
//     remove(id) {
//       const index = users.findIndex(user => user.id === id);
//       if (index === -1) {
//         throw new Error('User not found');
//       }
//       users.splice(index, 1);
//     }
//   };
  
//   export default AuthService;
  

//data
var users = [
    { id: 1, email: 'ravi.tambade@transflower.in', password:'seed', firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 2, email: 'shubhangi.tambade@transflower.in', password:' transflower', firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 3, email: 'sanika.bhor@gmail.com', password:'pvg', firstname:"Sankia", lastname:"Bhor",contactnumber:"9881735801" },
    { id: 4, email: 'rutuja@gmail.com', password:'Rutuja@27', firstname:"Rutuja", lastname:"Tambade",contactnumber:"7709567424" },
    { id: 5, email: 'shreedhar.patil@gmail.com', password:'seed', firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 6, email: 'Sharan.kulkarni@gmail.com', password:'seed', firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 7, email: 'kartik.g@gmail.com', password:'seed', firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" },    
    { id: 8, email: 'seema.patil@gmail.com', password:'seed', firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" },
];
 
//Service
 
const AuthService = {
 
    //service methods
   
     validate(email, password){
        let user= users.find( (theUser)=>(theUser.email ===email && theUser.password===password));
        if(user ==undefined){
            return false;
        }
        return true;
     },
 
     getAllUsers() {    
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
 
 export default AuthService;