import React from "react";

import { ContactForm } from "../../../components/Web/Contact";
import { Contact_Phone } from "../../../components/Web/Contact/Contact_Phone";
import { CarouselComponent } from "../../../components/Web/Carousel";
export function Contact() {
  return (
    <div>
      <Contact_Phone />
      <ContactForm />
      <CarouselComponent />
    </div>
  );
}
