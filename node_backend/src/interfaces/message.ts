export default interface MassegeDB {
    email: string | null,
    ip_sender: string | null ,
    ip_target: string,
    isAdmin: boolean,
    name: string | null,
    text: string,
    time: Date
}
