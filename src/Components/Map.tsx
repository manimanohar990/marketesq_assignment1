import React from 'react';

const MyMapComponent = () => (
  <div dangerouslySetInnerHTML={{ __html: `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1693456.8906222284!2d77.44441054999999!3d34.0045274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fd86bce37d7139%3A0xc6c2990fdad28ac7!2sLadakh!5e0!3m2!1sen!2sin!4v1731133113741!5m2!1sen!2sin" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `}} />
);

export default MyMapComponent;