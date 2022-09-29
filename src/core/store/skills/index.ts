import { createApi } from "@reduxjs/toolkit/query/react";
import { AxiosResponse } from "axios";
import { axiosBaseQuery } from "../../services/api";
import { ListResponse } from "../../types/responses";
import { API_REDUCERS_ENUM } from "../reducers";
import { Skills } from "../../models";

export const skillsApi = createApi({
  reducerPath: API_REDUCERS_ENUM.SKILLS,
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Skills"],
  endpoints: (build) => ({
    getSkillsList: build.query<Skills[], {}>({
      query: () => ({
        url: "skills/",
        method: "GET",
      }),
      transformResponse: (response: AxiosResponse<ListResponse<Skills>>) =>
        response.data.data.map(
          (u) => new Skills({ ...u.attributes, id: u.id })
        ),
      providesTags: (res) =>
        res?.length
          ? [...res.map(({ id }) => ({ type: "Skills", id } as const))]
          : [{ type: "Skills", id: "LIST" }],
    }),
  }),
});

export const { useGetSkillsListQuery, useLazyGetSkillsListQuery } = skillsApi;

export default skillsApi;
