import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import { Button, Image, Input } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 50px 20px;
`;
const default_photo = "https://firebasestorage.googleapis.com/v0/b/rn-chat-282a8.appspot.com/o/person.png?alt=media";

const SignUp = () => {
  const [photo, setPhoto] = useState(default_photo);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const refEmail = useRef(null);
  const refPassword = useRef(null);
  const refPasswordConfirm = useRef(null);

  const _handleSignUpBtnPress = () => {
    console.log("sign Up");
  };

  return (
    <KeyboardAwareScrollView extraScrollHeight={20}>
      <Container>
        <Image showButtuon={true} url={photo} onChangePhoto={setPhoto}/>
        <Input
          label="Name"
          placeholder="Name"
          returnKeyType="next"
          value={name}
          onChangeText={setName}
          onSubmitEditing={() => refName.current.focus()}
        />
        <Input
          ref={refEmail}
          label="Email"
          placeholder="Email"
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={() => refPassword.current.focus()}
        />
        <Input
          ref={refPassword}
          label="Password"
          placeholder="Password"
          returnKeyType="next"
          value={password}
          onChangeText={setPassword}
          isPassword={true}
          onSubmitEditing={() => refPasswordConfirm.current.focus()}
        />
        <Input
          ref={refPasswordConfirm}
          label="Password Confirm"
          placeholder="Password Confirm"
          returnKeyType="done"
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          isPassword={true}
          onSubmitEditing={_handleSignUpBtnPress}
        />
        <Button title="SignUp" onPress={_handleSignUpBtnPress} />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
