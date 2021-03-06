require('dotenv').config()
const connection = require('../config/db')

module.exports = {
  getUser: (search) => {
    return new Promise((resolve, reject) => {
      if (search) {
        connection.query("SELECT * FROM user WHERE email LIKE ? OR fullname LIKE ? OR status LIKE ?", [`%${search}%`, `%${search}%`, `%${search}%`], (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
      })
    } else {
      connection.query("SELECT * FROM user", (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      }
    })
  },
  userDetail: (id_user) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM user WHERE id = ?", id_user, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  register: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  login: (email) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM user WHERE email = ?",email,  (err, result) => {
            if (!err) {
                resolve(result);
            } else {
                reject(new Error(err));
            }
        })
    })
},
  getByEmail: (email) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user WHERE email = ?', email, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertUser: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO user SET ?", data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteUser: (id_user) => {
    return new Promise((resolve, reject) => {
      console.log(id_user)
      connection.query("DELETE FROM user WHERE id = ?", id_user, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error)
        }
      })
    })
  }
}