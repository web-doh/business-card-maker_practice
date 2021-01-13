import { firebaseDB } from "./firebase";

export default class Database {
  saveCards = (userId, card) => {
    firebaseDB //
      .ref(`${userId}/cards/${card.id}`)
      .set(card);
  };

  removeCards = (userId, card) => {
    firebaseDB //
      .ref(`${userId}/cards/${card.id}`)
      .remove();
  };

  readCards = (userId, func) => {
    const userCardList = firebaseDB.ref(`${userId}/cards/`);
    userCardList.on("value", (snapshot) => {
      const data = Object.values(snapshot.val());
      func(data);
    });
  };
}
