import {
  addNewContact,
  getContacts,
  getContactsWithID,
  UpdateContacts,
  DeleteContacts
} from "./../controllers/crmController";
import { register, lgoIn, LogInRequired } from "../controllers/userController";

const routes = app => {
  app
    .route("/contact")
    .get(
      (req, res, next) => {
        console.log(`requested from ${req.originalUrl}`);
        console.log(`method used ${req.method}`);
        next();
      },
      LogInRequired,
      getContacts
    )

    // post endpoint
    .post(
      (req, res, next) => {
        console.log(`requested from ${req.originalUrl}`);
        console.log(`method used ${req.method}`);
        next();
      },
      LogInRequired,
      addNewContact
    );

  app
    .route("/contact/:contactId")
    .get(LogInRequired, getContactsWithID)
    .put(LogInRequired, UpdateContacts)
    .delete(LogInRequired, DeleteContacts);

  app.route("/auth/register").post(register);

  app.route("/auth/login").post(lgoIn);
};

export default routes;
