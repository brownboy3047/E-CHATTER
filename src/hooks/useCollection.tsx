import { useState, useEffect } from "react";
import { db } from "../firebase/config";

// firebase import
import {
  collection,
  onSnapshot,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";

interface Document {
  id: string;
  // Define the structure of the document properties
  // Replace the 'any' type with the appropriate types for your document
  // For example, if your document has a 'name' property of type string,
  // you can define it as name: string;
  [key: string]: any;
}

export const useCollection = (c: string) => {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    const ref = collection(db, c); // c is the name of the collection we want to reference

    const unsub = onSnapshot(ref, (snapshot: QuerySnapshot<DocumentData>) => {
      const results: Document[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });

      setDocuments(results);
    });

    return () => unsub();
  }, [c]);

  return { documents };
};
