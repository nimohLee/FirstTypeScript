/* object */
// const person: {
//     name: string;
//     age: number;
// } = {
    // const person:{
    //     name: string;
    //     age: number;
    //     hobbies: string[]; // Array
    //     role: [number, string]; // Tuple
    // } = {

    /* Enum type (열거형)
        - Default 는 0, 1, 2 숫자가 차례로 지정됨 */
    enum Role { ADMIN, READ_ONLY, AUTHOR };

    const person = {
    name: "nimoh",
    age: 27,
    hobbies: ["Sports", "Cooking"],
    tuple : [2, "author"],
    role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
    /* person.hobbies의 타입이 문자열 배열로 지정했으므로 hobby .하면 문자열 메서드 추천해주고 에러 X  */
    console.log(hobby.toUpperCase()); 
    /* map은 배열 메서드이므로 문자열로 인식하고있는 hobby에 에러를 뱉어줌 */
    // console.log(hobby.map());
}

/* Tuple 
    - 자바스크립트에는 없음
    - 길이와 타입이 지정된 배열
    - 타입과 길이를 지정하더라도 push는 됨 */
person.tuple.push("admin");
// person.role[1] = 10;

/* Enum */