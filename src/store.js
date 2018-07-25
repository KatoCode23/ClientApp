import config from './config';

const firebase = window.firebase;
firebase.initializeApp(config);

let db = null;
let trainees = [];

export async function getData() {
    return new Promise((resolve) => {
        if (trainees.length === 0 ) {   
            db = firebase.firestore();
            db.settings({ timestampsInSnapshots: true });
            db.collection("trainees").get().then((querySnapshot) => {
                querySnapshot.forEach((trainee) => {
                    trainees.push(trainee.data());
                });
                resolve(trainees);
            });
        } else {
            resolve(trainees);
        }
    })
}