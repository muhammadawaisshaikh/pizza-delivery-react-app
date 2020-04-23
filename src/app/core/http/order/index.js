class APIS {
    apis() {
        return {
            listing: {
                headers: {
                    'token': null
                },
                method: 'get',
                path: '/v1/orders'
            },
            create_order: {
                headers: {
                    'token': null
                },
                method: 'post',
                path: '/v1/orders'
            },
        }
    }
}

export default new APIS;