import { FireStoreCollection } from "./firestore.collections";
import { FireStoreCreateDocInfo, FireStoreUpdateDocInfo } from "./usefirestore";
import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export class FireStoreBuilder {
    document: FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>
    
    constructor(document: FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>) {
        this.document = document
    }

    doc(docId: string | undefined, docType: FireStoreCollection) {
        return new FireStoreBuilder(this.document.collection(docType).doc(docId))
    }

    async create<K extends FireStoreCollection>({
        docData,
      }: FireStoreCreateDocInfo<K>) {
        try {
          await this.document.set({...docData});
        } catch (e) {
          console.log('error on creating data', e);
          throw e
        }
      }

      async update<K extends FireStoreCollection>({
        docData,
      }: FireStoreUpdateDocInfo<K>) {
        try {
          await this.document.update({...docData});
        } catch (e) {
          console.log('error on creating the user', e);
          throw e
        }
      }

      async read () {
        try {
          const documentSnapshot = await this.document.get();
          return documentSnapshot.data();
        } catch (e) {
          console.log('Error while reading the data', e);
          throw Error('Something went wrong');
        }
      }
}