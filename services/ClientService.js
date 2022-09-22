import axios from 'axios'; 

export const getTiendas = async (barrio) => {
    try {
        const res = await axios.get(`https://lockit-backend.herokuapp.com/api/providers/getByBarrio/${barrio.trim()}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getAvailableTypeLockers = async (idTienda) => {
    // decuelve los tipos de lockers disponibles de una tienda
    try {
        const res = await axios.get(`https://lockit-backend.herokuapp.com/api/lockers/availability/${idTienda}`)
        return res.data
    } catch (error) {
        console.log(JSON.stringify(error))
    }
}

