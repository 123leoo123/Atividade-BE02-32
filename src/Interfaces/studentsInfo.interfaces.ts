// model StudentInfo{
//     id Int @id @default(autoincrement())
//     phone String
//     address String
//     studentId Int @unique
//     student Student @relation(fields: [studentId], references: [id])
//   }

export interface IStudentInfo {
    id: number
    phone: string
    address: string
    studentId: number
}  

export type TcreateStudentInfo = Omit<IStudentInfo, "id">;