'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CourseSchema = new Schema({
  name: String,
  password: String,
  students: [{
    especialidad: String,
    fecha: Date,
    dni: String,
    apellidos: String,
    nombre: String,
    nacimiento: Date,
    direccion: String,
    codigopostal: String,
    poblacion: String,
    telefono: String,
    movil: String,
    email: String,
    titulacion: String,
    resultado: String,
    trabaja:Boolean,
    prestaciones: Boolean,
    discapacidad: String,
    experiencia: Boolean,
    cursoactual: Boolean
  }],
  active: Boolean
});

module.exports = mongoose.model('Course', CourseSchema);
