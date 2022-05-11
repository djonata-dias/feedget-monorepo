import { FormEvent } from "react";
import GoogleLogin from "react-google-login";


export function LoginForm() {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();

    }

    const responseGoogle = (response: any) => {
        console.log(response);
    }
    return (
        <form onSubmit={handleSubmit} className="w-40 h-40">
            <GoogleLogin
                clientId="831125895515-d624ta2tkm6l1d8mobvjt74ec2n6gbca.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </form>
    );
}
