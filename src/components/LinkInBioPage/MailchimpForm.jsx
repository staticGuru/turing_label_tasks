// components/LinkInBioPage/MailchimpForm.js
import React from 'react';

const MailchimpForm = ({ actionUrl }) => (
  <form action={actionUrl} method="post" target="_blank" noValidate>
    <input type="email" name="EMAIL" placeholder="Your email" required />
    <button type="submit">Subscribe</button>
  </form>
);

export default MailchimpForm;