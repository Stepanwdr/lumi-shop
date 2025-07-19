import customFetch from "@/shared/lib/configs/api/customFetch";
import { IGeneralAPIData } from "@/shared/types/api";

const post = await customFetch<IGeneralAPIData<any>>(
  `https://content-api.wildberries.ru/content/v2/get/cards/list`
);

console.log(post);

export default async function Page() {

  return <div>dsd</div>;
}
