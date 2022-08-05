import React from 'react';
import{ View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 
const ProfileScreen = () =>{
    return(
        <View>
             <Text
                 style={{
                      fontSize: 30,
                      textAlign: "center",
                     marginTop: "20%"
                 }}
            >Profile Screen</Text>

            <Text
                    style={{
                            fontSize: 20,
                            textAlign: "center",
                            marginTop: "8%",
                            marginBottom: "8%",
                        }}
            > -user-!</Text>
    
            <TouchableOpacity
                style={{
                    backgroundColor: "red",
                    padding: 10,
                    margin: 10,
                    width: "30%",
                    borderRadius: 10,
                    marginStart: "35%",
       
             
                }}>
                <View style={{alignItems:'center'}}>
                <Text>Log out</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default ProfileScreen;