
const {v4:uuidv4}=require('uuid');

export default function generateUUID(): string {
  const uuid: string = uuidv4();
  return uuid;
}

console.log(generateUUID(),typeof generateUUID())
