// dosyayı storage'a yükleyip, storage'ten url'yi geri döndürmelidir

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from ".";
import { v4 } from "uuid";
import { toast } from "react-toastify";

const uploadToStorage = async (file) => {
  // resmin boyutu 2mb büyükse yüklenmesin
  if (file.size > 2097152) {
    toast.warning("Lütfen 2 mb altında medya yükleyin.");
    return null;
  }
  // dosya resim değilse veya dosya yoksa fonksiyonu durdur
  if (!file || !file.type.startsWith("image")) return null;

  // dosyanın yükleneceği konumun referansını al
  // aynı isim olmasın diye v4() eklenir
  const imageRef = ref(storage, v4() + "_" + file.name);

  // referansını oluşturduğumuz konuma dosyayı yükle
  await uploadBytes(imageRef, file);
  // yüklenen dosyanın url'sini al ve return et
  const url = await getDownloadURL(imageRef);
  return url;
};

export default uploadToStorage;
