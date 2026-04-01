import { Mail, MapPin, Phone } from "lucide-react";
import {FaWhatsapp} from "react-icons/fa";

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "lawrenceaudoh@gmail.com",
    href: "mailto:lawrenceaudoh@gmail.com"
  },  
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+234 708 9457173",
    href: "https://wa.me/2347089457173"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 708 9457173",
    href: "tel:+2347089457173"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote (GMT +1)",
    href: "#"
  }
];