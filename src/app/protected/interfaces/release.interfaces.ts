export interface EstudianteRelease {
    error:    boolean;
    message:  string;
    response: Release[];
    status:   number;
}

export interface Release {
    title_release: string;
    sms_release: string;
    sender_release:    string;
    important_release: number;
    date_release:  Date;
}
