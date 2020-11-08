import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../costants/productCostants'
import axios from 'axios'

export const listProducts = () => async (dispach) => {

    try {
        dispach({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('/api/products')

        dispach({ type: PRODUCT_LIST_SUCCESS, payload: data })
    }
    catch (err) {
        dispach({ type: PRODUCT_LIST_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message })
    }

}