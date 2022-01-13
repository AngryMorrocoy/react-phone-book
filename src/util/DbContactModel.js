class DbContactModel {
  constructor(contactName, phoneNumber) {
    this.contactName = contactName;
    this.phoneNumber = phoneNumber;
  }

  toJSON() {
    const id = this.contactName.replaceAll(/[\s\\]/g, '-').toLowerCase();

    return [
      id,
      {
        contactName: this.contactName,
        phoneNumber: this.phoneNumber,
      },
    ];
  }
}

export default DbContactModel;
