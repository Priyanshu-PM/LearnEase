// isLoggedIn =>

export const isLoggedInTeacher = () => {

    let data = localStorage.getItem("teacher");
    if(data != null) return true;

    else return false;
};

export const isLoggedInStudent = () => {

    let data = localStorage.getItem("student");
    if(data != null) return true;

    else return false;
};