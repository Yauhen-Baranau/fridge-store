export const contactInfo = {
  phoneNumber: "+375 (44) 5581940",
  email: "info@holodcentr.by",
  address: "г. Минск, ул. Домбровская, 9",
  openHours: "Пн-Вс с 09.00 до 21.00",
};

export const contactHrefs = {
  email: `mailto:${contactInfo.email}`,
  address: 'https://yandex.by/maps/157/minsk/house/Zk4YcgJkTEMEQFtpfXVwcH9gZw==/?ll=27.454669%2C53.911263&z=19.8',
  phone: `tel:${contactInfo.phoneNumber
    .split(" ")
    .join("")
    .split("-")
    .join("")
    .split("(")
    .join("")
    .split(")")
    .join("")}`,
  website: 'https://example.com',
}