import emailjs from '@emailjs/browser';
import { FormData } from '../types/contact';

const EMAILJS_PUBLIC_KEY = 'OjfdEL2vVhLkANwiE';
const EMAILJS_SERVICE_ID = 'service_aqxvxwh';
const EMAILJS_TEMPLATE_ID = 'template_3po09mg';

emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendEmail = async (formData: FormData) => {
  const response = await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Hugo",
      reply_to: formData.email,
    }
  );

  if (response.status !== 200) {
    throw new Error('Failed to send email');
  }

  return response;
};