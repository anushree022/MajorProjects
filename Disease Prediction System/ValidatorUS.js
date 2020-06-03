export default class Validator {
  constructor(data) {
    this.data = data;
    this.errors = {
      name: [],
      age: [],
      gender: [],
      phone:[],
      email:[]
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
    Object.keys(this.errors.age).length +
    Object.keys(this.errors.gender).length+
    Object.keys(this.errors.phone).length +
    Object.keys(this.errors.email).length ;

    return count == 0;
  }
}

