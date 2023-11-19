export interface UserData {
    primerNombre:    string;
    segundoNombre:   string;
    primerApellido:  string;
    segundoApellido: string;
    edad:            number;
    genero?:          string;
    fechaNacimiento?: Date;
    correo?:          string;
    telefono?:        string;
    profesion?:       string;
    estadoCivil?:     string;
    estudios:        Estudio[];
    laboral:         Laboral[];
    idiomas?:         Idioma[];
    tecnologias:     Tecnologia[];
    aboutMe:         string[];
}

export interface Estudio {
    lugar:  string;
    titulo: string;
    fecha:  string;
}

export interface Idioma {
    idioma: string;
    nivel:  string;
}

export interface Laboral {
    empresa:     string;
    cargo:       string;
    descripcion: string;
    fechaInicio: string;
    fechaFin:    string;
}


export interface Tecnologia {

    Tipo:     string;
    Tecnologias:      string[];
}