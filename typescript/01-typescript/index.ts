type profileFormat = {
  id: number;
  name: string;
};
const cyberDude: profileFormat[] = [];
function addInterns(id: number, name: string): profileFormat {
  return {
    id,
    name,
  };
}
cyberDude.push(addInterns(1, "yogha raj dhayal"), addInterns(2, "Shajid"));
console.log(cyberDude);
