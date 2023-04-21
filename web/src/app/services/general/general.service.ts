import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, docData, getDocs, getFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private _firestore: Firestore
  ) { }
  getClients() {
    var ref = collection(getFirestore(), 'clients')
    
    return collectionData(ref, { 'idField': 'id' })
  }
}
