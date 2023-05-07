1. tau tanggung jawab masing2 bagian
   - router tentang mengghandle request & response saja
     - router hanya mengurus request masuk dan keluar saja, tidak lebih
   - controller tentang business logic
     - validasi data & user
     - pemanggilan model
     - business logic
   - model tentang ngasih data, dan error2 di database
     - ngga ngasih error jika datanya ngga ada
     - ngasih error jika ada masalah query / db connection
     - isinya query db
2. gunakan jsdoc untuk membantu diri kita dan developer lain agar lebih mudah handle code nya
   - usahakan gunakan satu tipe data untuk parameter / variable
   - hindari parameter / variable yang memiliki banyak tipe data
     karena if else nya bakal panjang dan sulit
3. buat method2 bantuan agar hidup lebih mudah
   - misal buat [responseHandler](responseHandler.js)
   - atau [errors](errors.js)
