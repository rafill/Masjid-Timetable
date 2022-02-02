import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Font from 'expo-font';

export class Home extends React.Component {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            "Poppins": require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
        });

        this.setState({ fontLoaded: true });
    }

    render() {
        const navigation = this.props.navigation;

        return(
          <View style={styles.container}>
              {
                  this.state.fontLoaded ? (
                      <Text style={styles.text}>
                          Home
                      </Text>
                  ) : null
              }
              <Button
                  style={styles.text}
                title={"Navigate to page"}
                onPress={() => navigation.navigate("Masjid List")}
              />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: "Poppins",
        fontSize: 20
    }
});
