class DbContactModel {
  constructor(contactName, phoneNumber) {
    this.contactName = contactName;
    this.phoneNumber = phoneNumber;
  }

  toJSON() {
    return {
        contactName: this.contactName,
        phoneNumber: this.phoneNumber,
    }
  }
}

export default DbContactModel;
