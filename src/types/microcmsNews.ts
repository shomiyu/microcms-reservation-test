//SDK利用準備
import { createClient, type MicroCMSQueries } from "microcms-js-sdk";
import type { Model } from "@/types/microcmsDefault";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

//型定義
export type TestResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Test[];
};

export interface Test extends Model {
  title: string;
  date: Reservation;
}

type Reservation = {
  fieldId: string;
  month: string;
  dates: Dates[];
};

type Dates = {
  fieldId: string;
  date: string;
  times: Time[];
};

type Time = {
  fieldId: string;
  time: string;
};

//APIの呼び出し
export const getNews = async (queries?: MicroCMSQueries) => {
  return await client.get<TestResponse>({ endpoint: "test", queries });
};
export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Test>({
    endpoint: "news",
    contentId,
    queries,
  });
};
