import { dirname } from "path";
import { fileURLToPath } from "url";

const ExpressFileName = fileURLToPath(import.meta.url);
const ExpressDirName = dirname(ExpressFileName);

function ExpressGetDirName(fileToPath: string, pathLevel: string) {
    const FileName = fileURLToPath(fileToPath + pathLevel);
    const DirName = dirname(FileName);
    return DirName;
};

export {
    ExpressFileName,
    ExpressDirName,
    ExpressGetDirName
};