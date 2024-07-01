import { IStudentInfo } from "./studentsInfo.interfaces";

export interface IStudent{
    id: number
    name: string
    email: string
    studentInfo?: IStudentInfo
}

export type TCreateStudentBody = Omit<IStudent, "id">;