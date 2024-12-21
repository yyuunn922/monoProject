import {useQuery} from "@tanstack/react-query";
import {axiosInstance} from "../axiosInstance";

export function authRepositoryUserInfo() {
    const func = ({queryKey}: { queryKey: string[] }) => {
        const [_, url] = queryKey;
        return axiosInstance().get(url).then(data => data.data);
    }
    return useQuery({
        queryKey: ['auth', '/temp'],
        queryFn: func
    })
}
