import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";

import Pusher from 'pusher-js/react-native';

const pusher_app_key = 'YOUR PUSHER APP KEY';
const pusher_app_cluster = 'YOUR PUSHER APP CLUSTER';
const base_url = 'YOUR HTTPS NGROK URL';