export interface EstudianteRelease {
    error:    boolean;
    message:  string;
    response: Release[];
    status:   number;
}

export interface Release {
    title_release: string;
    sms_release:   string;
    date_release:  Date;
}
