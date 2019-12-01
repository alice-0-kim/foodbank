import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView, View, Text, Image } from 'react-native';

const DEFAULT_FONT_COLOR = '#555555'
const styles = StyleSheet.create({
    fontTitle: {
      textTransform: 'uppercase',
      fontSize: 28,
      color: '#008391',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      textTransform: 'uppercase',
      fontSize: 18,
      color: '#008391',
      fontWeight: 'bold',
      marginBottom: 10
    },
    info: {
        fontSize: 18,
        color: '#008391',
        fontWeight: 'bold',
        marginBottom: 10
    },
    image: {
        marginBottom: 20
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 20,
        color: DEFAULT_FONT_COLOR,
        fontWeight: 'bold',
    },
    container: {
      flex: 1,
      height: 50,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 30
    },
  });

export default class AchievementScreen extends Component {
    static navigationOptions = {
        title: 'Achievements',
    };
    
    constructor(props) {
        super(props);

        this.state = {
            achievements: [
                { key: "1", name: "First Donation", source: require('../../assets/canned-protein.png'), unlocked: true},
                { key: "2", name: "3 Months of Donations", source: require('../../assets/canned-protein.png'), unlocked: true},
                { key: "3", name: "100 Canned Fruits", source: require('../../assets/canned-protein.png'), unlocked: false},
                { key: "4", name: "100 Canned Protein", source: require('../../assets/canned-protein.png'), unlocked: false},
                { key: "5", name: "Locked Achievement", source: require('../../assets/canned-protein.png'), unlocked: false},
                { key: "6", name: "Locked Achievement", source: require('../../assets/canned-protein.png'), unlocked: false},
                { key: "7", name: "Locked Achievement", source: require('../../assets/canned-protein.png'), unlocked: false},
                { key: "8", name: "Locked Achievement", source: require('../../assets/canned-protein.png'), unlocked: false},
                { key: "9", name: "Locked Achievement", source: require('../../assets/canned-protein.png'), unlocked: false},
            ]
        };
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.fontTitle}>Achievements</Text>
                <View style={styles.listItem}>
                    <View style={styles.image}>
                        {   
                            this.state.achievements.map((item) => {
                                return (
                                <View key={item.name+item.key}>
                                    <Image
                                        source={require('../../assets/canned-protein.png')}
                                        accessibilityLabel={item.name}
                                        accessible
                                    />
                                    <Text style={styles.listItem}>{item.name}</Text>
                                </View>)
                            })
                        }
                    </View>
                </View>
            </ScrollView>
        );
    }
}
