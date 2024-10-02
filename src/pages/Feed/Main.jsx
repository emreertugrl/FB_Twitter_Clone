import React, { useEffect, useState } from "react";
import Form from "../../components/form";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import Loader from "../../components/loader";
import Post from "../../components/post";

const Main = ({ user }) => {
  //
  const [tweets, setTweets] = useState();

  useEffect(() => {
    // verilerin alınacağı koleksiyonun referansını al
    const ref = collection(db, "tweets");

    // sorgu ayarları
    const q = query(ref, orderBy("createdAt", "desc"));
    // kolleksiyonu izle
    const unsubscribe = onSnapshot(q, (snapshot) => {
      // tweetlerin geçici olarak tutulacağı diziyi bul
      let temp = [];

      // doc'ların içerisindeki veriye erişip geçici diziye aktar
      snapshot.docs.forEach((doc) => temp.push({ ...doc.data(), id: doc.id }));

      // state'i güncelle
      setTweets(temp);
    });

    // bileşen erkandan ayrıldığında aboneliği durdur
    return () => unsubscribe();
  }, []);
  return (
    <main className="border border-zinc-600 overflow-y-auto">
      <header className="border-b border-zinc-600 p-4 font-bold">
        Anasayfa
      </header>
      <Form user={user} />

      {!tweets ? (
        <div className="my-20 scale-[1.5] ">
          <Loader />
        </div>
      ) : (
        tweets.map((tweet) => <Post key={tweet.id} tweet={tweet} />)
      )}
    </main>
  );
};

export default Main;
