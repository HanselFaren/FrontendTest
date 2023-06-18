/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */


ase/analytics";

// Replace with your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdqWFpv4RlyByR4FiJESy_spUlQgb4ZPs",
  authDomain: "gourmet-express-7b5e1.firebaseapp.com",
  projectId: "gourmet-express-7b5e1",
  storageBucket: "gourmet-express-7b5e1.appspot.com",
  messagingSenderId: "405318752008",
  appId: "1:405318752008:web:6328b0b28192cdd98dbebd",
  measurementId: "G-X7B027WQL1"
};

firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => (
  <FirebaseContext.Provider value={firebase}>{children}</FirebaseContext.Provider>
);

export const useFirebase = () => useContext(FirebaseContext);

export default firebase;
