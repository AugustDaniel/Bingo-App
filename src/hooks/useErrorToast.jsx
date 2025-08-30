import {useEffect} from "react";
import {toast} from "react-toastify";

export default function useErrorToast(errorMessage) {
    useEffect(() => {
        toast.error(errorMessage);
    }, [errorMessage])
}