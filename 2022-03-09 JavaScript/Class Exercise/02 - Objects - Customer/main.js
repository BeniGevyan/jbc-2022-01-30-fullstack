var customer = {
  firstName: "Moishe",
  lastName: "Ufnik",
  id: "034939232",
  email: "balbla@gmail.com",
  address: {
    street: "Sumsum",
    city: "Tel-Aviv",
    zipcode: "12345",
  },
};

document.write("First Name: " + customer.firstName + "<br/>");
document.write("Last Name: " + customer.lastName + "<br/>");
document.write("ID: " + customer.id + "<br/>");
document.write("Email: " + customer.email + "<br/>");
document.write("Street: " + customer.address.street + "<br/>");
document.write("City: " + customer.address.city + "<br/>");
document.write("Zipcode: " + customer.address.zipcode + "<br/>");
