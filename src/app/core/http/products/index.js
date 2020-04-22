class APIS {
    apis() {
        return {
            listing: {
                headers: {
                    'token': null
                },
                method: 'get',
                path: '/v1/products'
            }
        }
    }
}

export default new APIS;