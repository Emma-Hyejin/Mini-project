function printSkill(user) {
    if (user.skill === 3) {
        console.log(`
            스킬이 3이 시군요!
            ${user.age}살 ${user.name}은 승급입니다. 
            `);
    }
    else {
        console.log(`
            스킬이 미달 이십니다. 
            ${user.age}살 ${user.name}은 유지입니다.
            `);
    }
}
const kimcoding = {
    name: '김코딩',
    age: 28,
    skill: 3,
};
const parkhacker = {
    name: '박해커',
    age: 15,
    skill: 1,
};
printSkill(kimcoding);
printSkill(parkhacker);
//# sourceMappingURL=index.js.map