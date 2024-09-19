//data
var customers = [
    { id: 1, email: 'ravi.tambade@trransflower.in',firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 2, email: 'shubhangi.tambade@transflower.in',firstname:"shubhangi", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 3, email: 'sanika.bhor@gmail.com',firstname:"Sankia", lastname:"Bhor",contactnumber:"9881735801" },
    { id: 4, email: 'nikhil.navale@gmail.com',firstname:"nikhil", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 5, email: 'shreedhar.patil@gmail.com',firstname:"shreedhar", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 6, email: 'Sharan.kulkarni@gmail.com',firstname:"Sharan", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 7, email: 'kartik.g@gmail.com',firstname:"kartik", lastname:"Tambade",contactnumber:"9881735801" },    
    { id: 8, email: 'seema.patil@gmail.com',firstname:"seema", lastname:"Tambade",contactnumber:"9881735801" },
];
//Service
 
const CustomerService = {
    //service methods
   
    validate(email, password){
        let customer= customer.find( (theCustomer)=>(theCustomer.email ===email && theCustomer.password===password));
        if(customer ==undefined){
            return false;
        }
        return true;
     },
 
     getAll() {    
         return customers;
     },
 
     getCustomerById(id){
        let customer= customer.find( (theCustomer)=>(theCustomer.id ===id));
        return customer;
     },
 
     register(theCustomer){
        customers.push(theCustomer);
     },
 
     Update(theCustomer){
        customers=customers.filter(customer=>customer.id !==theCustomer.id);
        customers.push(theCustomer);
     },
 
     remove(id){
         customers=customers.filter(theCustomer=>theUser.id !==id);
     }
}
 
 export default CustomerService;