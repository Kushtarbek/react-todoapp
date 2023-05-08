import { 
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';


const provider = new GoogleAuthProvider();
const auth = getAuth();

export const LoginPage = () => {
    const signInWithGoogle = () => {
            signInWithPopup(auth, provider)
                .then((result) => {
                    //set the user to context
                })
        };


    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //set user to context
            });
    };

    const loginWithEmailAndPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //set user to context
        });
    };
}