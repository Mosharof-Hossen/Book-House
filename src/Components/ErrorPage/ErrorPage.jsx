import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div className="text-center mt-40 text-5xl font-semibold">
            <h1>Oops!</h1>
            <h2>{error.statusText}</h2>
        </div>
    );
};

export default ErrorPage;