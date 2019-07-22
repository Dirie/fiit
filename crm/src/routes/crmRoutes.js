import {
  addNewContact,
  getContacts,
  getContactsWithID,
  UpdateContacts,
  DeleteContacts
} from "./../controllers/crmController";
const routes = app => {
  app
    .route("/contact")
    .get((req, res, next) => {
      console.log(`requested from ${req.originalUrl}`);
      console.log(`method used ${req.method}`);
      next();
    }, getContacts)

    // post endpoint
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    .get(getContactsWithID)
    .put(UpdateContacts)
    .delete(DeleteContacts);
};

export default routes;
