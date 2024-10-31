import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Lista de Contactos</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {contact.nombre} <br />
            <strong>Apellido:</strong> {contact.apellido} <br />
            <strong>Teléfono:</strong> {contact.telefono}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
