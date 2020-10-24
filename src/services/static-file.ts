import { STATIC_FILE_BASE } from "./constants";

export const getStaticContent = (filename: string) =>
  `${STATIC_FILE_BASE}/${filename}`;
