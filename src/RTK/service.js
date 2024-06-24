import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getApi = createApi({
  reducerPath: 'getApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://api-marine-cms.developer-ourbase-camp.com/api/' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'https://app.marinaeye.com/api/' }),
  endpoints: (builder) => ({
    getFaq: builder.query({
      query: () => 'faq',
    }),
    getTestimonial: builder.query({
      query: () => `testimonial`,
    }),
    getMarinaBenefit: builder.query({
      query: () => `marina-benefit`,
    }),
    getMarinaApplication: builder.query({
      query: () => `marina-application`,
    }),
    getPages: builder.query({
      query: () => `web-pages`,
    }),
    getPartner: builder.query({
        query: () => `partner`,
      }),
      getSiteSetting: builder.query({
        query: () => `site-setting`,
      }),
      getNewsLetter: builder.mutation({
        query: (data) => ({
          url: 'news-letter',
          method: 'POST',
          body: data,
        }),
      }),

      getContactUs: builder.mutation({
        query: (data) => ({
          url: 'contact-us',
          method: 'POST',
          body: data,
        }),
      }),
  }),
});

export const { useGetFaqQuery, useGetTestimonialQuery, useGetMarinaBenefitQuery,useGetMarinaApplicationQuery,useGetPagesQuery , useGetPartnerQuery,useGetNewsLetterMutation,useGetContactUsMutation ,useGetSiteSettingQuery} = getApi;
