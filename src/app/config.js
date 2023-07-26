import bongoCat from '../assets/bongo-cat.svg'
import avatar from '../assets/profile.webp'

class Config {
  #_firstName = 'Đông';
  #_lastName = 'Ngô Bá';
  #_title = 'React Native Developer';
  #_email = 'dongnbas@gmail.com';
  #_address = 'Hanoi, Vietnam';
  #_subheading =
    "Hi there! My name is Dong Ngo. People usually know me by the name is AndyngoJs. I have a basic knowledge of software development. The more specific is on the mobile platform and web development.";

  get subHeading() {
    return this.#_subheading;
  }

  get iconTheEnd() {
    return bongoCat;
  }

  get avatar() {
    return avatar;
  }

  get firstName() {
    return this.#_firstName;
  }

  get lastName() {
    return this.#_lastName;
  }

  get personalInfo() {
    return {
      fullName: this.lastName + ' ' + this.firstName,
      title: this.#_title,
      email: this.#_email,
      address: this.#_address,
    };
  }
}

const appConfig = new Config();

export default appConfig;
