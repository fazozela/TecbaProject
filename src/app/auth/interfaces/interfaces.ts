export interface AuthResponse {
    error:    boolean;
    message:  string;
    response: Response;
    status:   number;
}

export interface Response {
    datos:    Datos;
    permisos: string[];
    token:    string;
}

export interface Datos {
    Users_status_login:   number;
    Users_nickname_login: string;
    Users_name_login:     string;
    Users_career_login:   string;
    Users_ci_login:       number;
    Users_img_login:      string;
    Users_phone_login:    number;
    Users_email_login:    string;
    Users_roles_login:    string;
}

export interface Usuario {
    Users_name_login: string;
    Users_career_login: string;
    Users_ci_login: number;
    Users_status_login: number;
}
