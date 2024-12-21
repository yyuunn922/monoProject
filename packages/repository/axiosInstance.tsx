import axios from 'axios';
import Key from '@packages/util/key';

// TODO::다시봐야함 // 아이폰에서, 쿠키 리프레시가 일어나지 않음

export enum AxiosInstanceContentType {
    FormData = 'multipart/form-data',
    JsonData = 'application/json',
}

const credentialAllowUrlList: string[] = [
    '/auth/phoneLogin',
    '/center/select',
    '/auth/logout',
];

export const axiosInstance = ({
                                  headerContent = AxiosInstanceContentType.JsonData,
                                  baseOnly = false,
                                  version = Key.V1,
                              }: {
    headerContent?: AxiosInstanceContentType;
    baseOnly?: boolean;
    version?: string;
} = {}) => {
    let url: string = Key.BaseUrl;

    if (!baseOnly) {
        url += version;
    }

    const output = axios.create({
        baseURL: url,
    });

    output.interceptors.request.use(
        async config => {
            config.headers['Content-Type'] = headerContent;
            config.withCredentials = true;

            // if (credentialAllowUrlList.includes(config.url!)) {
            //   config.withCredentials = true;
            // } else {
            //   config.withCredentials = false;
            //
            //   config.headers.Cookie = Object.entries(await Cookies.get(url))
            //     .filter(([key]) => key !== 'refreshToken')
            //     .map(([key, cookie]) => `${key}=${cookie.value}`)
            //     .join('; ');
            // }
            return config;
        },
        error => {
            return Promise.reject(error);
        },
    );

    output.interceptors.response.use(
        function (response) {
            return response;
        },
        async function (error) {
            const originalRequest = error.config;
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                originalRequest.withCredentials = true;
                return axios(originalRequest);
            }
            return Promise.reject(error);
        },
    );

    return output;
};
