import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

//       .auth()
//       .signInWithEmailAndPassword("ati@test.com", "testlogin")
//       .auth()
//       .signInWithEmailAndPassword("ati@test.com", "testlogin")

// if (firebase.apps.length === 0) {
//     firebase.initializeApp(firebaseConfig);
//   } else {
//     firebase.app();
//   }
//   const auth = firebase.auth();

// const [isAuthenticated, setIsAuthenticated] = useState(false);
// useEffect(() => {
//   setTimeout(() => {
//firebase.auth().signInWithEmailAndPassword("ati@test.com", "testlogin");
//       .then((user) => {
//         setIsAuthenticated(true);
//       })
//       .then((e) => {
//         console.log(e);
//       });
//   }, 2000);
// }, []);
