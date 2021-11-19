export interface UserEstudiante {
    error:    boolean;
    message:  string;
    response: Response[];
    status:   number;
}

export interface Response {
    name_subject:    string;
    cod_subject:     string;
    course_subject:  number;
    status_kinterno: StatusKinterno;
    score_kinterno:  number;
    year_kinterno:   string;
}

export enum StatusKinterno {
    Abandono = "ABANDONO",
    Aprobado = "APROBADO",
    Reprobado = "REPROBADO",
}
