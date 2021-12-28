export interface Horario {
    error:    boolean;
    message:  string;
    response: HorarioResponse[];
    status:   number;
}

export interface HorarioResponse {
    name_subject:         string;
    cod_subject:          string;
    path_programation:    string;
    start_subjectassign?: string;
    end_subjectassign?:   string;
    monday_schedule?:     number;
    tuesday_schedule?:    number;
    wednesday_schedule?:  number;
    thursday_schedule?:   number;
    friday_schedule?:     number;
    saturday_schedule?:   number;
    start_hour?:          string;
    end_hour?:            string;
}
