import express from "express";
import errors from "./errors";
import responseHandler from "./responseHandler";

const app = express();
// routes
app.post("/user/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const userCredential = userController.login(username, password);

  responseHandler.send(userCredential, res);
});

app.post("/user/login", userController.loginNewbe);

app.get("/user", (req, res) => {
  // case jika ada param 'username'
  const username = req.params.username;
  if (!username) {
    // get all user
  } else {
    // get by usename
  }
});

// controller
const userController = {
  loginNewbe(req) {
    const username = req.body.username;
    const password = req.body.password;

    return db.user.get({
      username: username,
      password: password,
    });
  },
  login(username, password) {
    // handle login
    try {
      const dbResult = db.user.get({
        username: username,
        password: password,
      });
      if (dbResult == null) {
        return errors.ErrNotFound();
      }
    } catch (error) {
      return errors.ErrServer(error);
    }

    // error handling jadi lebih enak
    // backend lebih aman dikarenakan kita ngga ngasih tau errornya ke frontend
  },
  addUser() {
    db.addUser({
      groupid: "",
      id: "",
    });
  },
  register() {
    // handle register
    return errors.ErrForbidden();
  },
  /**
   * get profile berdasarkan user id, returnnya harus satu
   * @param {string} userId
   * @returns {Object}
   */
  getProfile() {
    // handle get profile by id
  },
  /**
   * get profile berdasarkan username, returnnya harus satu
   * @param {string} userId
   * @returns {Object}
   */
  getProfileByUsername() {
    // handle get profile by id
  },
  /**
   * get all profile by object filter
   * pastikan filter nya akan mereturn data yang lebih dari satu
   * jika hasilnya ndak ketemu, return array kosong aja
   * @param {Object} filter
   * @param {string|number|object} filter.nationality 61 (malaysia), 62 (indonesia) | "indonesia", "malaysia"
   * @param {string} filter.groupId
   * @param {string} filter.ranking
   * @returns {Array<Object>}
   */
  getAllProfileByFilter(filter) {
    const result = dbMethod.getAllUser({
      groupid: "",
      nationality: filter.nationality,
      ranking: filter.ranking,
    });

    if (
      (filter.nationality && filter.nationality == 62) ||
      filter.nationality == "indonesia" ||
      filter.nationality.name == "indonesia"
    )
      // validasi tambahan
      // memastikan kalo user non admin ngga bisa
      // lihat user dengan group id

      // memastikan user admin bisa liat semua user
      return result;
  },
};

/**
 * didalam db
 * - id (satu)
 * - username (satu)
 * - nationality (banyak)
 * - groupid (banyak)
 * - ranking (banyak)
 * 1. db ngga bertanggung jawab atas data ndak ketemu
 * 2. db bertanggung jawab atas query yang salah atau koneksi yang salah
 */

const dbMethod = {
  /**
   * get single user
   * @param {Object} filter
   * @param {string} filter.id
   * @param {string} filter.username
   * @returns {Object}
   */
  getUser(filter) {
    if (filter.id) {
      const result = db.user.filter((d) => d.id == filter.id);
      if (result.length) {
        return result[0];
      }
      return null;
    }
    if (filter.username) {
      const result = db.user.filter((d) => d.username == filter.username);
      if (result.length) {
        return result[0];
      }
      return null;
    }
  },
  /**
   *
   * @param {Object} filter
   * @param {string} filter.nationality
   * @param {string} filter.groupid
   * @param {string} filter.ranking
   */
  getAllUser(filter) {
    const result = db.user.filter((d) => {
      if (isTheSame(filter.nationality, d.nationality)) {
        return null;
      }
      if (isTheSame(filter.groupid, d.groupid)) {
        return null;
      }
      if (isTheSame(filter.ranking, d.ranking)) {
        return null;
      }

      return d;
    });
    return result;
  },
};

function isTheSame(actual, check) {
  if (actual && actual != check) {
    return false;
  }
  return actual;
}

const db = {
  user: [
    {
      id: "",
      name: "",
      username: "",
      nationality: "asd",
      groupid: "asd",
      ranking: "asd",
    },
    {
      id: "",
      name: "",
      username: "",
      nationality: "",
      groupid: "",
      ranking: "",
    },
    {
      id: "",
      name: "",
      username: "",
      nationality: "",
      groupid: "",
      ranking: "",
    },
  ],
  /**
   *
   * @param {Object} user
   * @param {string} user.id
   * @param {string} user.name
   * @param {string} user.username
   * @param {string} user.nationality
   * @param {string} user.groupid
   * @param {string} user.ranking
   */
  addUser(user) {
    this.user.push(user);
  },
};
