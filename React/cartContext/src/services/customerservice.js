
let customers = [
    { id: 1, email: 'ravi.tambade@transflower.in', firstname: "Ravi", lastname: "Tambade", contactnumber: "9881735801", password: "password1" },
    { id: 2, email: 'shubhangi.tambade@transflower.in', firstname: "Shubhangi", lastname: "Tambade", contactnumber: "9881735801", password: "password2" },
    { id: 3, email: 'sanika.bhor@gmail.com', firstname: "Sanika", lastname: "Bhor", contactnumber: "9881735801", password: "password3" },
    { id: 4, email: 'nikhil.navale@gmail.com', firstname: "Nikhil", lastname: "Navale", contactnumber: "9881735801", password: "password4" },
    { id: 5, email: 'shreedhar.patil@gmail.com', firstname: "Shreedhar", lastname: "Patil", contactnumber: "9881735801", password: "password5" },
    { id: 6, email: 'sharan.kulkarni@gmail.com', firstname: "Sharan", lastname: "Kulkarni", contactnumber: "9881735801", password: "password6" },
    { id: 7, email: 'kartik.g@gmail.com', firstname: "Kartik", lastname: "G", contactnumber: "9881735801", password: "password7" },    
    { id: 8, email: 'seema.patil@gmail.com', firstname: "Seema", lastname: "Patil", contactnumber: "9881735801", password: "password8" },
];

const Customer = 'customers';

// Service
const CustomerService = {
    // Get all customers
    getCustomers: () => {
        const customers = localStorage.getItem(Customer);
        return customers ? JSON.parse(customers) : [];
      },
    // Get customer by ID
    getCustomerById: (id) => {
        const customers = CustomerService.getCustomers();
        return customers.find(customer => customer.id === id);
      },
    // Register a new customer
    addCustomer: (customer) => {
        const customers = CustomerService.getCustomers();
        customers.push(customer);
        localStorage.setItem(Customer, JSON.stringify(customers));
      },

    // Update existing customer
    updateCustomer: (updatedCustomer) => {
        let customers = CustomerService.getCustomers();
        customers = customers.map(customer =>
          customer.id === updatedCustomer.id ? updatedCustomer : customer
        );
        localStorage.setItem(Customer, JSON.stringify(customers));
      },

    // Remove customer by ID
    deleteCustomer: (id) => {
        let customers = CustomerService.getCustomers();
        customers = customers.filter(customer => customer.id !== id);
        localStorage.setItem(Customer, JSON.stringify(customers));
      }
};

export default CustomerService;
