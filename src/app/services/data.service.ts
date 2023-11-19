import { Injectable } from '@angular/core';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  userData: UserData = {
      "primerNombre":"Daniel",
      "segundoNombre":"Hernando",
      "primerApellido":"Miranda",
      "segundoApellido":"Tellez",
      "edad": 32,
      "genero": "Masculino",
      "fechaNacimiento": new Date('20/12/1991'),
      "correo": "danielh1991@hotmail.com",
      "telefono": "3214561354",
      "profesion": "Ingeniero de Sistemas",
      "estadoCivil": "Soltero",
      "estudios":[
          {"lugar":"Fundación Universitaria Compensar", "titulo":"Tecnologo en desarrollo de sistemas de información", "fecha":"En curso"},
          {"lugar":"Fundación Universitaria Compensar", "titulo":"Tecnico Profesional en opeación y mantenimiento de bases de datos", "fecha":"2022-10"},
          {"lugar":"Misión Tic - Universidad Nacional", "titulo":"Desarrollo de apliaciones web", "fecha":"2022-12"}
      ],
      "laboral":[
          {"empresa":"Megalinea", "cargo":"Ingeniero Junior de Desarrollo", "fechaInicio":"2022-11", "fechaFin":"Actualmente"},
          {"empresa":"Jazzplat Colombia", "cargo":"Desarrollador Junior", "fechaInicio":"2022-09", "fechaFin":"2022-11"},
          {"empresa":"Jazzplat Colombia", "cargo":"Practicante Desarrollo", "fechaInicio":"2022-03", "fechaFin":"2021-08"},
          {"empresa":"Jazzplat Colombia", "cargo":"Asesor Servicio al Cliente", "fechaInicio":"2013-03", "fechaFin":"2022-03"}
      ],
      "idiomas":[
          {"idioma":"Español", "nivel":"Nativo"},
          {"idioma":"Ingles", "nivel":"B2"}
      ],
      "tecnologias":[
            {
                Tipo: "Frontend",
                Tecnologias: [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Angular",
                  "Typescript",
              ]},
               {
                Tipo: "Backend",
                Tecnologias: [
                  ".Net Framework",
                  ".Net Core",
                  "C#",
            ]},
            {
                Tipo: "Bases de Datos",
                Tecnologias: [
                  "SQL Server"
              ]
            }  
      ],
      "hobbies":[
          "Videojuegos"
      ],
      "redesSociales":[
          {"nombre":"Facebook", "url":"https://www.facebook.com/danielh1991"},
          {"nombre":"Instagram", "url":"https://www.instagram.com/danielh1991/"},
          {"nombre":"Twitter", "url":"https://twitter.com/danielh1991"}
      ],
      "aboutMe":[
          "Tengo 32 años de edad y me desempeño como desarrollador Full Stack.",
          "Actualmente estudiando Ingenieria de sistemas en VI semestre.",
          "Soy una persona que le gusta aprender cosas nuevas, me gusta la tecnologia y los videojuegos, me gusta compartir con mi familia y amigos."
      ]
  };
  getProfileData(): UserData {
    return this.userData;
  }
}


