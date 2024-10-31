import React, { useState, useEffect } from 'react';
import ContactList from './ContactList';
import AddContact from './AddContact';

const AgendaApp = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://www.raydelto.org/agenda.php');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Error al obtener contactos:", error);
    }
  };

  function agregarContacto(contacto) {
    console.log('Enviando contacto en JSON:', JSON.stringify(contacto));

    fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        body: JSON.stringify(contacto)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Respuesta del servidor:', data);
        setContacts((prevContacts) => [...prevContacts, contacto]);
    })
    .catch(error => {
        console.error('Error en la solicitud POST:', error);
    });
}


  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    
    <div className="container">
      <div className='Model'>
      <AddContact addContact={agregarContacto} />
      </div>
      <div className='Model contact-list'>
      <ContactList contacts={contacts} />
      </div>
    </div>
  );
};

export default AgendaApp;
