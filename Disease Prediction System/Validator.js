export default class Validator {
  constructor(data) {
    this.data = data;
    this.errors = {
      name: [],
      email: [],
      phone: [],
      spec: []
    };
  }

  validatePresence(attr) {
    if(this.data[attr] == ""){ 
      this.errors[attr].push("can't be blank");
    }
    return this;
  }

  isValid() {
    let count = Object.keys(this.errors.name).length +
    Object.keys(this.errors.email).length +
    Object.keys(this.errors.phone).length+
    Object.keys(this.errors.spec).length;

    return count == 0;
  }
}

