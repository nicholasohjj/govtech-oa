    import axios from "axios";

    const BACKEND_URL = "http://localhost:3000";

    export const addOperation = async (number1, number2) => {
    try {
        const response = await axios.post(BACKEND_URL + "/arithmetic/add", {
        number1,
        number2,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    export const subtractOperation = async (number1, number2) => {
    try {
        const response = await axios.post(BACKEND_URL + "/arithmetic/subtract", {
        number1,
        number2,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
    };
