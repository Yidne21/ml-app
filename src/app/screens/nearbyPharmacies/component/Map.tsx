import * as React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { useRef } from 'react';
import { Polyline } from 'react-native-maps';

const tokyoRegion = {
  latitude: 35.6762,
  longitude: 139.6503,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};
const chibaRegion = {
  latitude: 35.6074,
  longitude: 140.1065,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export default function Map() {
  const mapRef = useRef(null);

  const ininitialRegion = {
    latitude: 9.145,
    longitude: 40.4897,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };
  const location = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const locator = () => {
    //complete this animation in 3 seconds
    mapRef.current.animateToRegion(ininitialRegion, 3 * 1000);
  };

  const [pin, setPin] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const [region, setRegion] = React.useState({
    latitude: 9.0192,
    longitude: 38.7525,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        initialRegion={ininitialRegion}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        {/* <Polyline
          coordinates={[tokyoRegion, chibaRegion]} //specify our coordinates
          strokeColor={'#000'}
          strokeWidth={3}
          lineDashPattern={[1]}
        /> */}

        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        />
        <Marker
          coordinate={pin}
          pinColor="black"
          draggable={true}
          onDragStart={(e) => {
            console.log('Drag start', e.nativeEvent.coordinates);
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={1000} />
      </MapView>
      <TextInput
        placeholder="Search pharmacy or medicine"
        style={{
          position: 'absolute',
          top: 30,
          left: 10,
          right: 10,
          height: 40,
          backgroundColor: 'white',
          padding: 10,
        }}
        onChangeText={(text) => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
  },
});
