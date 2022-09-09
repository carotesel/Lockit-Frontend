export const registerUser = async (data, phone) => {
  const body = {
    nombre: data.nombre,
    apellido: data.apellido,
    mail: data.email,
    contrasenia: data.contra,
    telefono: phone,
    fechaNac: "2022-01-01",
    fkRol: data.user,
    username: data.userName,
  };

  console.log(body);

  try {
    const res = await axios.post(
      "https://lockit-backend.herokuapp.com/api/users/createuser",
      body
    );
    if (res.status === 201) {
      if (data.user === 1) {
        navigation.navigate("Rprovider");
      } else if (data.user === 2) {
        navigation.navigate("Login");
      }
    }
    navigation.navigate("Rprovider");
  } catch (error) {
    console.log(error);
  }
};

export const registrarTienda = async (data, is24, tipo) => {
    const body = {
      nombre_titular: data.nombre,
      apellido_titular: data.apellido,
      dni_titular: data.dni,
      mail_interno: data.email,
      telefono_interno: data.telefono,
      razon_social: data.razonSocial,
      cuit: data.CUIT,
      nombre_tienda: data.nombreComercio,
      direccion: data.direccion,
      ciudad: data.ciudad,
      cp: data.codPostal,
      mail_publico: data.emailComercio,
      telefono_publico: data.telefonoPublico,
      descripcion: data.descripcion,
      seguridad: securityChecked,
      veinticuatrohs: is24,
      tipo_locker: tipo,
      precio: 654,
      descuento: 20,
      barrio: data.barrio,
      fk_usuario: 1, 
      horario: dataTiming,
    };

    try {
      console.log(data);
      const res = await axios.post(
        "https://lockit-backend.herokuapp.com/api/providers/createProvider",
        body
      );
      if (res.status === 201) {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };