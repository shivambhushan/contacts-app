import axios from "axios";
import { useEffect, useState } from "react";

function ContactsApp() {
  const getContacts = () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => reject(err));
    });
  };
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function getCont() {
      const cont = (await getContacts()) || [];
      setContacts(cont);
    }
    getCont();
  }, []);
  return (
    <div className="px-3 px-md-5 text-start">
      <div className="col-12 mt-4">
        <h2>Contacts</h2>
      </div>
      <div className="col-12 py-3">
        {contacts.length <= 0 ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className="col-12 mb-3">
              <div
                className="py-0 px-2 border text-muted"
                style={{ borderRadius: "15px", cursor: "not-allowed" }}
              >
                Search Contacts
              </div>
            </div>

            {contacts.map((item) => {
              return (
                <div key={item.id} className="border-bottom d-flex mb-2 pb-1">
                  <div className="col-11">
                    <div style={{ fontSize: "16px" }}>{item.name}</div>
                    <div style={{ fontSize: "13px" }} className="text-muted">
                      {item.phone}
                    </div>
                  </div>
                  <div className="col-1 text-end">
                    <button
                      style={{ fontSize: "11px", cursor: "not-allowed" }}
                      className="btn btn-light px-1 py-0 text-muted"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default ContactsApp;
