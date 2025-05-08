import { NODE_ENV_TYPE } from '../interfaces/interface.navbar'
const URL_BASE_LOCAL = process.env.REACT_APP_URL_BASE_LOCAL || '';
const URL_BASE_PROD = process.env.REACT_APP_URL_BASE_PROD || '';
interface getBaseProps {
    environment: NODE_ENV_TYPE;
}
export const appUrls = {
    base:{
        local: URL_BASE_LOCAL,
        prod: URL_BASE_PROD
    },
    getBase({environment}: getBaseProps){
        return environment === 'development' ? URL_BASE_LOCAL : URL_BASE_PROD;
    }
}
