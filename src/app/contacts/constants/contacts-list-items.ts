import { contactHrefs, contactInfo } from "@constants/contact-info";

export const contactListItems = [
  {
    content: contactInfo.phoneNumber,
    href: contactHrefs.phone,
    iconPath: '/icons/phone.svg',
  },
  {
    content: contactInfo.email,
    href: contactHrefs.email,
    iconPath: '/icons/envelope.svg'
  },
  {
    content: contactInfo.address,
    href: contactHrefs.address,
    iconPath: '/icons/location.svg'
  },
  {
    content: contactInfo.openHours,
    iconPath: '/icons/clock.svg',
  },
]