export interface Calificacion {
    error:    boolean;
    message:  string;
    response: CalificacionResponse[];
    status:   number;
}

export interface CalificacionResponse {
    name_subject:           string;
    cod_subject:            string;
    forfirst_calification:  number;
    sumfirst_calification:  number;
    first_calification:     number;
    forsecond_calification: number;
    sumsecond_calification: number;
    second_calification:    number;
    forthird_calification:  number;
    sumthird_calification:  number;
    third_calification:     number;
    final_calification:     number;
    instance_calification:  number;
    finalnote_calification: number;
    status_calification:    string;
}
