export interface userState {
  token: null | string;
  data: null | string;
  isLoading: boolean;
  isFetched: boolean;
  isPending: boolean;
  isError: boolean;
  error: null | string;
}
