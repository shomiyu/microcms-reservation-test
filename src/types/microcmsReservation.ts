import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export interface Reservation {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  entryMonth: string;
  entryDates: entryDate[];
}

export interface entryDate {
  fieldId: string;
  entryDate: string | null;
  entryTimes: entryTime[];
}

export interface entryTime {
  fieldId: string;
  entryTime: string;
}

//APIの呼び出し
export const getReservation = async (queries?: MicroCMSQueries) => {
  return await client.get<Reservation>({
    endpoint: "reservation",
    queries,
  });
};
