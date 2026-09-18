import { writeFile, appendFile, readFile } from "fs/promises";

const appendData = async (file2, content) => {
  try {
    return await appendFile(file2, content);
  } catch (error) {
    console.log(error.message);
  }
};
const writeData = async (file2, content) => {
  try {
    return await writeFile(file2, content);
  } catch (error) {
    console.log(error.message);
  }
};
const readData = async (file2) => {
  try {
    return await readFile(file2, "utf-8");
  } catch (e) {
    console.log(e.message);
    console.log("File not found");
  } finally {
    console.log("Read data finished");
  }
};

const deleteFile = async (file2) => {
  try {
    await unlink(file2);
  } catch (error) {
    console.log("File not found");
  }
};

const data = await readData("file3.js");
console.log(data);

//If a function uses an awaits keyword then the function must be async.
