export default interface DBMassege {
    email: string | null,
    ip_target: string | null,
    isAdmin: boolean,
    name: string | null,
    text: string,
    // time: Date  // תכלס כן עדיף להביא מכאן את התאריך ולא מהסרבר - בקטע שישמר למקרה של סרביס וורקרים לאוף ליין
}
