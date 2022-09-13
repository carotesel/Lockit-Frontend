import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = async (loginData, navigation) => {
    const res = await axios.post("https://lockit-backend.herokuapp.com/api/users/login", loginData)
    .then( res => {          
        AsyncStorage.setItem('token', res.data.token);
       // navigation.navigate("CliNav");
    })
    .catch( err => {
        console.log(err);
    })
};
