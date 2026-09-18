import { mkdir, rm } from "fs/promises";

//Create recursive directory
await mkdir("uploads/resume", { recursive: true });

//Create Single directory
await mkdir("uploads/images");

//remove directory
await rm("uploads", { recursive: true });
