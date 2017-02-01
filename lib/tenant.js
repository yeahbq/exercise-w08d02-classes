class Tenant {
  constructor(f_name, l_name, gender, born_on) {
    this._f_name = f_name;
    this._l_name = l_name;
    this.gender = gender;
    this.born_on = born_on;
  }
  set name(name) {
    this._f_name = name.split(' ')[0]
    this._l_name = name.split(' ')[1]
  }
  set nickname(name) {
    this._nickname = name;
  }
  get fullname() {
    return this._f_name + ' \'' + this._nickname + '\' ' + this._l_name
  }
}


module.exports = Tenant;
