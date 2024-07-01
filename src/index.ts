import { StudentServices } from "./services/student.services";
import { StudentInfo } from "@prisma/client";
import { TCreateStudentBody } from "./Interfaces/students.interfaces";

async function exampleController(){
    const studentServices = new StudentServices();

    const studentInfo = new StudentServices();

    const studentInfo1 = studentInfo.create({ address: "Rua 1", phone: "123456789", studentId: 1});
    
    const studentInfo2 = studentInfo.create({ address: "Rua 2", phone: "987654321", studentId: 2});

    console.log(studentInfo1, studentInfo2);

    const findOne = await studentServices.findOne(1);

    const findMany = await studentServices.findMany("leu");
}

//     const createMany = await studentServices.createMany([
//         { 
//         name: "Leuzin", 
//         email: "Leuzin@gmail.com" },
//         {
//         name: "robson", 
//         email: "robsoncruzoé@gmail.com"
//     }]);

//     console.log(createMany);

//     const create = await studentServices.create({ 
//         name: "Leuzin2", 
//         email: "leonardodleao2@gmail.com"});

//         console.log(create)
// }


// exampleController();

