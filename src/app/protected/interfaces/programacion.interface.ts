export interface Programacion {
    error:    boolean;
    message:  string;
    response: ProgramacionResponse[];
    status:   number;
}

export interface ProgramacionResponse {
    name_subject:            string;
    cod_subject:             string;
    course_subject:          number;
    path_programation:       string;
    start_subjectassign?:    string;
    end_subjectassign?:      string;
    modality_subjectassign?: string;
    name_teacher?:           string;
    first_teacher?:          string;
    second_teacher?:         string;
    whatsapp_link?:          string;
}