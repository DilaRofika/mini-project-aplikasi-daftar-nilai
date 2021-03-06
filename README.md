# mini-project Aplikasi Daftar Nilai Siswa

> _⏰_ Time Estimation 7 days

## TASK SUMMARY
```
Aplikasi ini merupakan bagian kecil dari sistem informasi akdaemik pada suatu sekolah informal, yang berfungsi untuk menampung nilai-nilai siswa yang ada pada sekolah informal tersebut. Dalam satu kelas tentunya ada banyak siswa dan siswa-siswa tersebut dapat mengambil banyak mata pelajaran keterampilan selain mata pelajaran wajib.
Aplikasi ini dibangun dengan NodeJS, expressJS, progrestree dan CSS.
```

```
npx sequelize-cli model:generate --name ClassRoomtbl --attributes name:string,grade:number

npx sequelize-cli model:generate --name Mapeltbl --attributes name:string,day:string

npx sequelize-cli model:generate --name Nilaitbl --attributes idMapel:number,idClassRoom:number,idStudent:number,nilai:number

npx sequelize-cli model:generate --name Studenttbl --attributes name:string,idClassRoom:number,idMapel:number

npx sequelize-cli db:create

npx sequelize-cli db:migrate
```

## End Point
```
/classrooms/
/mapels/
/nilais/
/students/
/classrooms/create
/mapels/create
/nilais/create
/students/create
/classrooms/update/:id
/mapels/update/:id
/nilais/update/:id
/students/update/:id
/classrooms/delete/:id
/mapels/delete/:id
/nilais/delete/:id
/students/delete/:id
```