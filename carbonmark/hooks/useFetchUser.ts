import { fetcher } from "lib/fetcher";
import { User } from "lib/types/carbonmark";
import type { SWRConfiguration } from "swr";
import useSWR from "swr";

export const useFetchUser = (address?: string, options?: SWRConfiguration) => {
  const { data, ...rest } = useSWR<User>(
    address ? `/api/users/${address}?type=wallet` : null,
    fetcher,
    options
  );

  const carbonmarkUser = !!data?.handle ? data : null;

  return { carbonmarkUser, ...rest };
};
