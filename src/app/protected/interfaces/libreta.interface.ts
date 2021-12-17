export interface Libreta {
    error:    boolean;
    message:  string;
    response: LibretaResponse[];
    status:   number;
}

export interface LibretaResponse {
    name_subject:        string;
    cod_subject:         string;
    course_subject:      number;
    requirement_subject: string;
    status_programation: string;
}
