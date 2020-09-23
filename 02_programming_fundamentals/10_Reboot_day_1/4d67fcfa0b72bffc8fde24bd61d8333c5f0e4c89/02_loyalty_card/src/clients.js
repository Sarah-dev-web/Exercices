function clients(reader) {
  const customer = {

    firstName: "Billy",
    lastName: "The Kid",
  
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    history: [["12/12/2020", 400]],
    fidelityPoints: 0,
    usedFidelityPoints: 20,
    computeFidelityPoints: function () {},
  };
  console.log(customer.fullName());
}

export { clients };
