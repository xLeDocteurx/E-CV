const Schema = require('validate');

const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const baseUserRegister = new Schema({
  email:{
    type: String,
    required: true,
    match: emailRegExp,
    message:{
      type: "Email non valide",
      required: "L'email est nécessaire pour l'inscription",
      match: "Email non valide"
    }
  },
  username: {
    type: String,
    required: true,
    message:{
      type: "Pseudo non valide",
      required: "Un pseudo est nécessaire pour l'inscription",
    }
  },
  password: {
    type: String,
    required: true,
    length: {min: 8},
    message:{
      type: "Mot de passe incorrect",
      required: "Le mot de passe est nécessaire pour l'inscription",
      length: "Ton mot de passe est trop court, 8 caractères minimum"
    }
  },
  birthday:{
    type: Date,
    required: true,
    message: {
      type: "Ta date de naissance n'est pas correcte",
      required: "La date de naissance est nécessaire pour l'inscription"
    }
  }
});

module.exports = {
	baseUserRegister
}