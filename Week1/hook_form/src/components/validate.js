export default function validateInfo(props) {
    let errors = {}

    if(!props.firstName){
        errors.username = "First Name is required"
    }

    if(!props.lastName){
        errors.lastName = "Last Name is required"
    }

    if(!props.email){
        errors.email = "Email is required"
    }

    if(!props.password){
        errors.password = "Password is required"
    }else if(props.password.length < 4){
        errors.password = "Password must be at least 4 characters"
    }

    if(!props.confirmPassword){
        errors.confirmPassword = "Password is required"
    }else if(props.confirmPassword !== props.password){
        errors.confirmPassword = "Confirm Password does not match password"
    }

    return errors;
}