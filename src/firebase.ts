import { initializeApp } from "firebase/app";
import { getRemoteConfig } from "firebase/remote-config";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Remote Config and get a reference to the service
const remoteConfig = getRemoteConfig(app);
