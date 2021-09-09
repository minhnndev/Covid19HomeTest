import {gql} from '@apollo/client';

export const GET_PARAMS_COVID = gql`
  query provinces {
    provinces {
      Province_Name
      Province_Id
      Lat
      Long
      Confirmed
      Deaths
      Recovered
      Last_Update
    }
    totalVietNam {
      confirmed
      deaths
      recovered
    }
  }
`;
