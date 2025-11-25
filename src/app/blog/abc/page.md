

###  Tutorial: Fetching Data di JavaScript

Dalam tutorial ini kita akan belajar cara sederhana **mengambil data dari API** menggunakan `fetch` di React.  
Contoh ini menggunakan API publik dari [JSONPlaceholder](https://jsonplaceholder.typicode.com).

---

##  Tujuan
- Memahami cara menggunakan `fetch` untuk mengambil data.
- Menyimpan data ke dalam state React.
- Menampilkan hasil data ke dalam list.

---

##  Langkah 1: Import React Hooks
Kita butuh `useState` dan `useEffect` untuk menyimpan data dan melakukan fetching saat komponen pertama kali dirender.

```javascript
import { useEffect, useState } from 'react';
function FetchDemo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
<FetchDemo />