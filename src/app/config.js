class Config {
  #_firstName = "Đông";
  #_lastName = "Ngô Bá";
  #_title = "React Native Developer";
  #_email = "dongnbas@gmail.com";

  get avatar() {
    return "src/assets/dongngo-avatar.jpg";
  }

  get firstName() {
    return this.#_firstName;
  }

  get lastName() {
    return this.#_lastName;
  }

  get personalInfo() {
    return {
      fullName: this.lastName + " " + this.firstName,
      title: this.#_title,
      email: this.#_email,
    };
  }
}

const appConfig = new Config();

export default appConfig;
