import { baseUrl } from "@/enums";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const url = baseUrl + "/articles";
