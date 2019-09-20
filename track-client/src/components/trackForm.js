import React, { useState, useContext } from "react";
import { Text, Input, Button } from "react-native-elements";
import { Modal, View } from "react-native";
import Spacer from "../components/spacer";
import { Context } from "../context/LocationContext";
import useTracks from "../hooks/useTracks";

export default function TrackForm() {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    state: { isRecording, trackName, location },
    setTrackName,
    toggleRecording
  } = useContext(Context);
  const [saveTrack] = useTracks();

  let buttonTitle = isRecording ? "Stop" : "Start Recording";
  return (
    <>
      <Modal
        presentationStyle="formSheet"
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          console.log("hello");
        }}
      >
        <View style={{ marginTop: 22 }}>
          <Spacer>
            <Text>Track Name</Text>
            <Input value={trackName} onChangeText={setTrackName}></Input>
          </Spacer>
          <Spacer>
            <Button
              title="Save"
              onPress={() => {
                setModalVisible(false);
                saveTrack();
              }}
            />
          </Spacer>
        </View>
      </Modal>
      <Spacer>
        <Button title={buttonTitle} onPress={toggleRecording} />
        <Spacer />

        {!isRecording && location.length > 0 ? (
          <Button title="Save" onPress={() => setModalVisible(true)} />
        ) : null}
      </Spacer>
    </>
  );
}
