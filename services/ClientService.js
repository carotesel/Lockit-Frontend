import axios from "axios";

export const getTiendas = async (barrio) => {
  try {
    const res = await axios.get(
      `https://lockit-backend.herokuapp.com/api/providers/getByBarrio/${barrio.trim()}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAvailableTypeLockers = async (idTienda) => {
  // decuelve los tipos de lockers disponibles de una tienda
  try {
    const res = await axios.get(
      `https://lockit-backend.herokuapp.com/api/lockers/availability/${idTienda}`
    );
    return res.data;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};

export const reservarLocker = async (idTien, tipo, user, horas, navigation) => {
  try {
    const body = {
        idTienda : idTien,
        tipoLocker: tipo,
        idUser: user,
        duracion: horas
      }

      console.log(body);

    const res = await axios.post(
      `https://lockit-backend.herokuapp.com/api/reservas/createReserva`, body, {
        validateStatus: false});
        console.log(res.status);

        if (res.status === 200) {
          navigation.navigate("Confirmado");
        }
        else {
            alert("No se pudo realizar la reserva");
        }
    return res.data;
  } catch (error) {
    console.log('[0]',JSON.stringify(error.response));
  }
};
