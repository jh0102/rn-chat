import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./auth";

const Navigation = () => {
    return (
        <NavigationContainer>
            <Auth />
        </NavigationContainer>
    );
};

export default Navigation;