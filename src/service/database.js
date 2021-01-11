import { firebaseDB } from "./firebase";

export default class Database {
  saveCards = (userId, cards) => {
    firebaseDB //
      .ref(`${userId}/cards/${cards.id}`)
      .set({
        cards,
      });
  };

  removeCards = (userId, cards) => {
    firebaseDB //
      .ref(`${userId}/cards/${cards.id}`)
      .remove();
  };
}
