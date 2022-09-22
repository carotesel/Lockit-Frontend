import axios from "axios";

export const getStore = async (idUsuario) => {
    try {
        const res = await axios.get(
        `https://lockit-backend.herokuapp.com/api/providers/getByUser/${idUsuario}`
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
    }

export const getLockers = async (idTienda) => {
    try {
        const res = await axios.get(
        `https://lockit-backend.herokuapp.com/api/lockers/getById/${idTienda}`
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
    }